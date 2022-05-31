import React, { useCallback, useContext, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { usePersistFn } from 'ahooks'
import Context from '../../context'
import { Gantt } from '../../types'
import DragResize from '../drag-resize'
import './index.less'
import { TOP_PADDING } from '../../constants'
import { ONE_DAY_MS } from '../../store'

interface TaskBarProps {
  data: Gantt.Bar
}

const TaskBar: React.FC<TaskBarProps> = ({ data }) => {
  const {
    store,
    getBarColor,
    renderBar,
    onBarClick,
    prefixCls,
    barHeight,
    alwaysShowTaskBar,
    renderLeftText,
    renderRightText,
  } = useContext(Context)
  const {
    width,
    translateX,
    translateY,
    invalidDateRange,
    stepGesture,
    dateTextFormat,
    record,
    loading,
    getDateWidth,
  } = data

  const { disabled = false } = record || {}

  const prefixClsTaskBar = `${prefixCls}-task-bar`

  const { selectionIndicatorTop, showSelectionIndicator, rowHeight } = store

  const showDragBar = useMemo(() => {
    if (!showSelectionIndicator) return false
    // 差值
    const baseTop = TOP_PADDING + rowHeight / 2 - barHeight / 2
    return selectionIndicatorTop === translateY - baseTop
  }, [showSelectionIndicator, selectionIndicatorTop, translateY, rowHeight, barHeight])

  const themeColor = useMemo(() => {
    if (translateX + width >= dayjs().valueOf() / store.pxUnitAmp) return ['#95DDFF', '#64C7FE']
    return ['#FD998F', '#F96B5D']
  }, [store.pxUnitAmp, translateX, width])

  const handleBeforeResize = (type: Gantt.MoveType) => () => {
    if (disabled) return
    store.handleDragStart(data, type)
  }
  const handleResize = useCallback(
    ({ width: newWidth, x }) => {
      if (disabled) return
      store.updateBarSize(data, { width: newWidth, x })
    },
    [data, store, disabled]
  )
  const handleLeftResizeEnd = useCallback(
    (oldSize: { width: number; x: number }) => {
      store.handleDragEnd()
      store.updateTaskDate(data, oldSize, 'left')
    },
    [data, store]
  )
  const handleRightResizeEnd = useCallback(
    (oldSize: { width: number; x: number }) => {
      store.handleDragEnd()
      store.updateTaskDate(data, oldSize, 'right')
    },
    [data, store]
  )

  const handleMoveEnd = useCallback(
    (oldSize: { width: number; x: number }) => {
      store.handleDragEnd()
      store.updateTaskDate(data, oldSize, 'move')
    },
    [data, store]
  )
  const handleAutoScroll = useCallback(
    (delta: number) => {
      store.setTranslateX(store.translateX + delta)
    },
    [store]
  )
  const allowDrag = showDragBar && !loading

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation()
      if (onBarClick) onBarClick(data.record)
    },
    [data.record, onBarClick]
  )
  const reachEdge = usePersistFn((position: 'left' | 'right') => position === 'left' && store.translateX <= 0)
  // 根据不同的视图确定拖动时的单位，在任何视图下都以一天为单位
  const grid = useMemo(() => ONE_DAY_MS / store.pxUnitAmp, [store.pxUnitAmp])

  const moveCalc = -(width / store.pxUnitAmp)

  return (
    <div
      role='none'
      className={classNames(prefixClsTaskBar, {
        [`${prefixClsTaskBar}-invalid-date-range`]: invalidDateRange,
        [`${prefixClsTaskBar}-overdue`]: !invalidDateRange,
      })}
      style={{
        transform: `translate(${translateX}px, ${translateY}px)`,
      }}
      onClick={handleClick}
    >
      {loading && <div className={`${prefixClsTaskBar}-loading`} />}
      <div>
        {allowDrag && (
          <>
            {/* {stepGesture !== 'moving' && (
              <div className={styles['dependency-handle']} style={{ left: -34, width: 12 }}>
                <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <circle className={styles.outer} stroke="#87D2FF" fill="#FFFFFF" cx="6" cy="6" r="5.5" />
                    <circle className={styles.inner} fill="#87D2FF" cx="6" cy="6" r="2" />
                  </g>
                </svg>
              </div>
            )}
            {stepGesture !== 'moving' && (
              <div className={classNames(styles['dependency-handle'], styles.right)} style={{ left: width + 28, width: 12 }}>
                <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <circle className={styles.outer} stroke="#87D2FF" fill="#FFFFFF" cx="6" cy="6" r="5.5" />
                    <circle className={styles.inner} fill="#87D2FF" cx="6" cy="6" r="2" />
                  </g>
                </svg>
              </div>
            )} */}
            <DragResize
              className={classNames(`${prefixClsTaskBar}-resize-handle`, `${prefixClsTaskBar}-resize-handle-left`, {
                [`${prefixClsTaskBar}-resize-handle-disabled`]: disabled,
              })}
              style={{ left: -14 }}
              onResize={handleResize}
              onResizeEnd={handleLeftResizeEnd}
              defaultSize={{
                x: translateX,
                width,
              }}
              minWidth={30}
              grid={grid}
              type='left'
              scroller={store.chartElementRef.current || undefined}
              onAutoScroll={handleAutoScroll}
              reachEdge={reachEdge}
              onBeforeResize={handleBeforeResize('left')}
              disabled={disabled}
            />
            <DragResize
              className={classNames(`${prefixClsTaskBar}-resize-handle`, `${prefixClsTaskBar}-resize-handle-right`, {
                [`${prefixClsTaskBar}-resize-handle-disabled`]: disabled,
              })}
              style={{ left: width + 1 }}
              onResize={handleResize}
              onResizeEnd={handleRightResizeEnd}
              defaultSize={{
                x: translateX,
                width,
              }}
              minWidth={30}
              grid={grid}
              type='right'
              scroller={store.chartElementRef.current || undefined}
              onAutoScroll={handleAutoScroll}
              reachEdge={reachEdge}
              onBeforeResize={handleBeforeResize('right')}
              disabled={disabled}
            />
            <div
              className={classNames(`${prefixClsTaskBar}-resize-bg`, `${prefixClsTaskBar}-resize-bg-compact`)}
              style={{ width: width + 30, left: -14 }}
            />
          </>
        )}
        <DragResize
          className={`${prefixClsTaskBar}-bar`}
          onResize={handleResize}
          onResizeEnd={handleMoveEnd}
          defaultSize={{
            x: translateX,
            width,
          }}
          minWidth={30}
          grid={grid}
          type='move'
          scroller={store.chartElementRef.current || undefined}
          onAutoScroll={handleAutoScroll}
          reachEdge={reachEdge}
          onBeforeResize={handleBeforeResize('move')}
        >
          {renderBar ? (
            renderBar(data, {
              width: width + 1,
              height: barHeight + 1,
            })
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
              width={width + 1}
              height={barHeight + 1}
              viewBox={`0 0 ${width + 1} ${barHeight + 1}`}
            >
              <path
                fill={record.backgroundColor || (getBarColor && getBarColor(record).backgroundColor) || themeColor[0]}
                stroke={record.borderColor || (getBarColor && getBarColor(record).borderColor) || themeColor[1]}
                d={`
              M${width - 2},0.5
              l-${width - 5},0
              c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934
              c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066
              l0,5.3

              c0.03256,0.38255 0.20896,0.724 0.47457,0.97045
              c0.26763,0.24834 0.62607,0.40013 1.01995,0.40013
              l4,0

              l${width - 12},0

              l4,0
              c0.41421,0 0.78921,-0.16789 1.06066,-0.43934
              c0.27145,-0.27145 0.43934,-0.64645 0.43934,-1.06066

              l0,-5.3
              c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045
              c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z
            `}
              />
            </svg>
          )}
        </DragResize>
      </div>
      {(allowDrag || disabled || alwaysShowTaskBar) && (
        <div className={`${prefixClsTaskBar}-label`} style={{ left: width / 2 - 10 }}>
          {getDateWidth(translateX + width + moveCalc, translateX)}天
        </div>
      )}
      {(stepGesture === 'moving' || allowDrag || alwaysShowTaskBar) && (
        <>
          <div className={`${prefixClsTaskBar}-date-text`} style={{ left: width + 16 }}>
            {renderRightText ? renderRightText(data) : dateTextFormat(translateX + width + moveCalc)}
          </div>
          <div className={`${prefixClsTaskBar}-date-text`} style={{ right: width + 16 }}>
            {renderLeftText ? renderLeftText(data) : dateTextFormat(translateX)}
          </div>
        </>
      )}
    </div>
  )
}
export default observer(TaskBar)

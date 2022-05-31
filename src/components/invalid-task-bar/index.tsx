import React, { useContext, useCallback, useState, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { usePersistFn } from 'ahooks'
import Context from '../../context'
import { Gantt } from '../../types'
import DragResize from '../drag-resize'
import './index.less'

interface TaskBarProps {
  data: Gantt.Bar
}
const barH = 8
let startX = 0
const renderInvalidBarDefault = element => element
const InvalidTaskBar: React.FC<TaskBarProps> = ({ data }) => {
  const { store, prefixCls, renderInvalidBar = renderInvalidBarDefault } = useContext(Context)
  const triggerRef = useRef<HTMLDivElement>(null)
  const { translateY, translateX, width, dateTextFormat, record } = data
  const [visible, setVisible] = useState(false)

  const { disabled = false } = record || {}

  const { translateX: viewTranslateX, rowHeight } = store
  const top = translateY
  const prefixClsInvalidTaskBar = `${prefixCls}-invalid-task-bar`

  const handleMouseEnter = useCallback(() => {
    if (data.stepGesture === 'moving') return
    startX = triggerRef.current?.getBoundingClientRect()?.left || 0
    setVisible(true)
  }, [data.stepGesture])
  const handleMouseLeave = useCallback(() => {
    if (data.stepGesture === 'moving') return

    setVisible(false)
    store.handleInvalidBarLeave()
  }, [data.stepGesture, store])
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (data.stepGesture === 'moving') return

      const pointerX = viewTranslateX + (event.clientX - startX)
      // eslint-disable-next-line no-shadow
      const { left, width } = store.startXRectBar(pointerX)
      store.handleInvalidBarHover(data, left, Math.ceil(width))
    },
    [data, store, viewTranslateX]
  )

  const handleBeforeResize = () => {
    store.handleInvalidBarDragStart(data)
  }
  const handleResize = useCallback(
    ({ width: newWidth, x }) => {
      store.updateBarSize(data, { width: newWidth, x })
    },
    [data, store]
  )
  const handleLeftResizeEnd = useCallback(
    (oldSize: { width: number; x: number }) => {
      store.handleInvalidBarDragEnd(data, oldSize)
    },
    [data, store]
  )
  const handleAutoScroll = useCallback(
    (delta: number) => {
      store.setTranslateX(store.translateX + delta)
    },
    [store]
  )
  const reachEdge = usePersistFn((position: 'left' | 'right') => position === 'left' && store.translateX <= 0)

  if (disabled) return null

  return (
    <DragResize
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onResize={handleResize}
      onResizeEnd={handleLeftResizeEnd}
      defaultSize={{
        x: translateX,
        width,
      }}
      minWidth={30}
      grid={30}
      type='right'
      scroller={store.chartElementRef.current || undefined}
      onAutoScroll={handleAutoScroll}
      reachEdge={reachEdge}
      onBeforeResize={handleBeforeResize}
      clickStart
    >
      <div
        ref={triggerRef}
        className={prefixClsInvalidTaskBar}
        style={{
          left: viewTranslateX,
          height: rowHeight,
          transform: `translateY(${top - (rowHeight - barH) / 2}px`,
        }}
      />
      {visible &&
        renderInvalidBar(
          <div
            className={`${prefixClsInvalidTaskBar}-block`}
            aria-haspopup='true'
            aria-expanded='false'
            style={{
              left: translateX,
              width: Math.ceil(width),
              transform: `translateY(${top}px)`,
              backgroundColor: '#7B90FF',
              borderColor: '#7B90FF',
            }}
          >
            <div
              className={`${prefixClsInvalidTaskBar}-date`}
              style={{
                right: Math.ceil(width + 6),
              }}
            >
              {dateTextFormat(translateX)}
            </div>
            <div
              className={`${prefixClsInvalidTaskBar}-date`}
              style={{
                left: Math.ceil(width + 6),
              }}
            >
              {dateTextFormat(translateX + width - width / store.pxUnitAmp)}
            </div>
          </div>,
          data
        )}
    </DragResize>
  )
}
export default observer(InvalidTaskBar)

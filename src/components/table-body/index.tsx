import React, { useContext, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import Context from '../../context'
import { TOP_PADDING } from '../../constants'
import RowToggler from './RowToggler'
import './index.less'

const TableRows = () => {
  const { store, onRow, tableIndent, expandIcon, prefixCls, onExpand } = useContext(Context)
  const { columns, rowHeight } = store
  const columnsWidth = store.getColumnsWidth
  const barList = store.getBarList

  const { count, start } = store.getVisibleRows
  const prefixClsTableBody = `${prefixCls}-table-body`
  if (barList.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          color: ' rgba(0,0,0,0.65)',
          marginTop: 30,
        }}
      >
        暂无数据
      </div>
    )
  }
  return (
    <>
      {barList.slice(start, start + count).map((bar, rowIndex) => {
        // 父元素如果是其最后一个祖先的子，要隐藏上一层的线
        const parent = bar._parent
        const parentItem = parent?._parent
        let isLastChild = false
        if (parentItem?.children && parentItem.children[parentItem.children.length - 1] === bar._parent)
          isLastChild = true

        return (
          <div
            key={bar.key}
            role='none'
            className={`${prefixClsTableBody}-row`}
            style={{
              height: rowHeight,
              top: (rowIndex + start) * rowHeight + TOP_PADDING,
            }}
            onClick={() => {
              onRow?.onClick(bar.record)
            }}
          >
            {columns.map((column, index) => (
              <div
                key={column.name}
                className={`${prefixClsTableBody}-cell`}
                style={{
                  width: columnsWidth[index],
                  minWidth: column.minWidth,
                  maxWidth: column.maxWidth,
                  textAlign: column.align ? column.align : 'left',
                  paddingLeft: index === 0 ? tableIndent * (bar._depth + 1) + 10 : 12,
                  ...column.style,
                }}
              >
                {index === 0 &&
                  // eslint-disable-next-line unicorn/no-new-array
                  new Array(bar._depth).fill(0).map((_, i) => (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className={classNames(`${prefixClsTableBody}-row-indentation`, {
                        [`${prefixClsTableBody}-row-indentation-hidden`]: isLastChild && i === bar._depth - 2,
                        [`${prefixClsTableBody}-row-indentation-both`]: i === bar._depth - 1,
                      })}
                      style={{
                        top: -(rowHeight / 2) + 1,
                        left: tableIndent * i + 15,
                        width: tableIndent * 1.5 + 5,
                      }}
                    />
                  ))}
                {index === 0 && bar._childrenCount > 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: tableIndent * bar._depth + 15,
                      background: 'white',
                      zIndex: 9,
                      transform: 'translateX(-52%)',
                      padding: 1,
                    }}
                  >
                    {expandIcon ? (
                      expandIcon({
                        level: bar._depth,
                        collapsed: bar._collapsed,
                        onClick: event => {
                          event.stopPropagation()
                          if (onExpand) onExpand(bar.task.record, !bar._collapsed)
                          store.setRowCollapse(bar.task, !bar._collapsed)
                        },
                      })
                    ) : (
                      <RowToggler
                        prefixCls={prefixCls}
                        level={bar._depth}
                        collapsed={bar._collapsed}
                        onClick={event => {
                          event.stopPropagation()
                          if (onExpand) onExpand(bar.task.record, !bar._collapsed)
                          store.setRowCollapse(bar.task, !bar._collapsed)
                        }}
                      />
                    )}
                  </div>
                )}
                <span className={`${prefixClsTableBody}-ellipsis`}>
                  {column.render ? column.render(bar.record) : bar.record[column.name]}
                </span>
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}
const ObserverTableRows = observer(TableRows)
const TableBorders = () => {
  const { store, prefixCls } = useContext(Context)
  const { columns } = store
  const columnsWidth = store.getColumnsWidth
  const barList = store.getBarList
  if (barList.length === 0) return null

  const prefixClsTableBody = `${prefixCls}-table-body`
  return (
    <div role='none' className={`${prefixClsTableBody}-border_row`}>
      {columns.map((column, index) => (
        <div
          key={column.name}
          className={`${prefixClsTableBody}-cell`}
          style={{
            width: columnsWidth[index],
            minWidth: column.minWidth,
            maxWidth: column.maxWidth,
            textAlign: column.align ? column.align : 'left',
            ...column.style,
          }}
        />
      ))}
    </div>
  )
}
const ObserverTableBorders = observer(TableBorders)

const TableBody: React.FC = () => {
  const { store, prefixCls } = useContext(Context)
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.persist()
      store.handleMouseMove(event)
    },
    [store]
  )
  const handleMouseLeave = useCallback(() => {
    store.handleMouseLeave()
  }, [store])
  const prefixClsTableBody = `${prefixCls}-table-body`
  return (
    <div
      className={prefixClsTableBody}
      style={{
        width: store.tableWidth,
        height: store.bodyScrollHeight,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ObserverTableBorders />
      <ObserverTableRows />
    </div>
  )
}
export default observer(TableBody)

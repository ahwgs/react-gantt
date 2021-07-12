import React, { useContext, useCallback, useState, useRef } from 'react'
import { usePersistFn } from 'ahooks'
import { observer } from 'mobx-react-lite'
import Context from '../../context'
import './index.less'

const ScrollBar: React.FC = () => {
  const { store, prefixCls } = useContext(Context)
  const { tableWidth, viewWidth } = store
  const width = store.scrollBarWidth
  const prefixClsScrollBar = `${prefixCls}-scroll_bar`
  const [resizing, setResizing] = useState(false)
  const positionRef = useRef({
    scrollLeft: 0,
    left: 0,
    translateX: 0,
  })
  const handleMouseMove = usePersistFn((event: MouseEvent) => {
    const distance = event.clientX - positionRef.current.left
    // TODO 调整倍率
    store.setTranslateX(distance * (store.viewWidth / store.scrollBarWidth) + positionRef.current.translateX)
  })
  const handleMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
    setResizing(false)
  }, [handleMouseMove])
  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      positionRef.current.left = event.clientX
      positionRef.current.translateX = store.translateX
      positionRef.current.scrollLeft = store.scrollLeft
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      setResizing(true)
    },
    [handleMouseMove, handleMouseUp, store.scrollLeft, store.translateX]
  )

  return (
    <div
      role='none'
      className={prefixClsScrollBar}
      style={{ left: tableWidth, width: viewWidth }}
      onMouseDown={handleMouseDown}
    >
      {resizing && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 9999,
            cursor: 'col-resize',
          }}
        />
      )}
      <div
        className={`${prefixClsScrollBar}-thumb`}
        style={{
          width,
          left: store.scrollLeft,
        }}
      />
    </div>
  )
}
export default observer(ScrollBar)

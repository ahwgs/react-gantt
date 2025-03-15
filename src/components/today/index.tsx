import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Context from '../../context'
import './index.less'

const Today: React.FC = () => {
  const { store, prefixCls } = useContext(Context)
  return (
    <div
      className={`${prefixCls}-today`}
      style={{
        transform: `translate(${store.todayTranslateX}px)`,
      }}
    >
      <div
        className={`${prefixCls}-today_line`}
        style={{
          height: store.bodyScrollHeight,
        }}
      />
    </div>
  )
}
export default observer(Today)

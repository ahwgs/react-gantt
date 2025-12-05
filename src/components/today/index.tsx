import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Context from '../../context'
import { ONE_DAY_MS } from '../../store'
import './index.less'

const Today: React.FC = () => {
  const { store, prefixCls } = useContext(Context)
  const isRTL = store.isRTL
  const halfDayWidth = (ONE_DAY_MS / store.pxUnitAmp) / 2
  return (
    <div
      className={`${prefixCls}-today`}
      style={{
        transform: `translate(${store.todayTranslateX + halfDayWidth}px)`,
        left: 0,
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

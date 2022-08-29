/* eslint-disable no-underscore-dangle */
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import Context from '../../context'
import TaskBarThumb from '../task-bar-thumb'

const BarThumbList: React.FC = () => {
  const { store } = useContext(Context)
  const barList = store.getBarList
  const { count, start } = store.getVisibleRows
  return (
    <>
      {barList.slice(start, start + count).map(bar => {
        if (store.getTaskBarThumbVisible(bar)) return <TaskBarThumb data={bar} key={bar.key} />
        return null
      })}
    </>
  )
}
export default observer(BarThumbList)

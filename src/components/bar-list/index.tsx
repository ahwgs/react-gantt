/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import TaskBar from '../task-bar'
import InvalidTaskBar from '../invalid-task-bar'
import GroupBar from '../group-bar'
import Context from '../../context'

const BarList: React.FC = () => {
  const { store } = useContext(Context)
  const barList = store.getBarList
  const { count, start } = store.getVisibleRows
  return (
    <>
      {barList.slice(start, start + count).map(bar => {
        if (bar._group) return <GroupBar key={bar.key} data={bar} />

        return bar.invalidDateRange ? <InvalidTaskBar key={bar.key} data={bar} /> : <TaskBar key={bar.key} data={bar} />
      })}
    </>
  )
}
export default observer(BarList)

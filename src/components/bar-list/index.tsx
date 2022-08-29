/* eslint-disable no-underscore-dangle */
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import Context from '../../context'
import GroupBar from '../group-bar'
import InvalidTaskBar from '../invalid-task-bar'
import TaskBar from '../task-bar'

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

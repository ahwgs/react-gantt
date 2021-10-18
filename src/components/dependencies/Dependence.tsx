import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import find from 'lodash/find'
import Context from '../../context'
import { Gantt } from '../../types'
import styles from './Dependence.less'

const spaceX = 10
const spaceY = 10
interface DependenceProps {
  data: Gantt.Dependence
}
interface Point {
  x: number
  y: number
}
/**
 * 获取关键点
 *
 * @param from
 * @param to
 */
function getPoints(from: Point, to: Point, type: Gantt.DependenceType) {
  const { x: fromX, y: fromY } = from
  const { x: toX, y: toY } = to
  const sameSide = type === 'finish_finish' || type === 'start_start'
  // 同向，只需要两个关键点
  if (sameSide) {
    if (type === 'start_start') {
      return [
        { x: Math.min(fromX - spaceX, toX - spaceX), y: fromY },
        { x: Math.min(fromX - spaceX, toX - spaceX), y: toY },
      ]
    }
    return [
      { x: Math.max(fromX + spaceX, toX + spaceX), y: fromY },
      { x: Math.max(fromX + spaceX, toX + spaceX), y: toY },
    ]
  }
  // 不同向，需要四个关键点

  return [
    { x: type === 'finish_start' ? fromX + spaceX : fromX - spaceX, y: fromY },
    {
      x: type === 'finish_start' ? fromX + spaceX : fromX - spaceX,
      y: toY - spaceY,
    },
    {
      x: type === 'finish_start' ? toX - spaceX : toX + spaceX,
      y: toY - spaceY,
    },
    { x: type === 'finish_start' ? toX - spaceX : toX + spaceX, y: toY },
  ]
}
const Dependence: React.FC<DependenceProps> = ({ data }) => {
  const { store, barHeight } = useContext(Context)
  const { from, to, type } = data
  const barList = store.getBarList
  const fromBar = find(barList, bar => bar.record.id === from)
  const toBar = find(barList, bar => bar.record.id === to)
  if (!fromBar || !toBar) return null

  const posY = barHeight / 2
  const [start, end] = (() => [
    {
      x: type === 'finish_finish' || type === 'finish_start' ? fromBar.translateX + fromBar.width : fromBar.translateX,
      y: fromBar.translateY + posY,
    },
    {
      x: type === 'finish_finish' || type === 'start_finish' ? toBar.translateX + toBar.width : toBar.translateX,
      y: toBar.translateY + posY,
    },
  ])()
  const points = [...getPoints(start, end, type), end]
  const endPosition = type === 'start_finish' || type === 'finish_finish' ? -1 : 1
  return (
    <g stroke='#f87872' className={styles['task-dependency-line']}>
      <path
        className={styles.line}
        d={`
          M${start.x},${start.y}
          ${points.map(point => `L${point.x},${point.y}`).join('\n')}
          L${end.x},${end.y}
          `}
        strokeWidth='1'
        fill='none'
      />
      <path
        name='arrow'
        strokeWidth='1'
        fill='#f87872'
        d={`
        M${end.x},${end.y} 
        L${end.x - 4 * endPosition},${end.y - 3 * endPosition} 
        L${end.x - 4 * endPosition},${end.y + 3 * endPosition} 
        Z`}
      />
    </g>
  )
}
export default observer(Dependence)

import dayjs from 'dayjs'
import RcGantt, { Gantt } from 'rc-gantt'
import React from 'react'

interface Data {
  name: string
  startDate: string
  endDate: string
}

const data = Array.from({ length: 100 }).fill({
  name: '一个名称一个名称一个名称一个名称',
  startDate: dayjs().format('YYYY-MM-DD'),
  endDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),
}) as Data[]

const customSights: Gantt.SightConfig[] = [
  {
    label: '自定义日',
    value: Gantt.ESightValues.day,
    type: 'day',
  },
  {
    label: '自定义周',
    value: Gantt.ESightValues.week,
    type: 'week',
  },
]

const App = () => (
  <div style={{ width: '100%', height: 500 }}>
    <RcGantt<Data>
      data={data}
      columns={[
        {
          name: 'name',
          label: '名称',
          width: 100,
        },
      ]}
      customSights={customSights}
      onUpdate={async (row, startDate, endDate) => {
        console.log('update', row, startDate, endDate)
        return true
      }}
    />
  </div>
)

export default App

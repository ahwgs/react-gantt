import React from 'react'
import RcGantt from 'rc-gantt'

interface Data {
  name: string
  startDate: string
  endDate: string
}

const data = Array.from({ length: 100 }).fill({
  name: '一个名称一个名称一个名称一个名称',
  startDate: '2021-07-10',
  endDate: '2021-07-12',
}) as Data[]

const App = () => (
  <div style={{ width: '100%', height: 500 }}>
    <RcGantt<Data>
      data={data}
      columns={[
        {
          name: 'name',
          label: '名称',
          width: 200,
        },
        {
          name: 'startDate',
          label: '开始时间',
        },
        {
          name: 'endDate',
          label: '结束时间',
          render: record => <span>{record.endDate}</span>,
        },
      ]}
      tableIndent={0}
      onUpdate={async () => true}
    />
  </div>
)

export default App

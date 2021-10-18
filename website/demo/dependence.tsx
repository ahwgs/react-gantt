import React from 'react'
import RcGantt, { Dependence } from 'rc-gantt'

interface Data {
  name: string
  startDate: string
  endDate: string
}

const data = [
  {
    name: '一个名称一个名称一个名称一个名称',
    startDate: '2021-10-10',
    endDate: '2021-10-11',
    id: 1,
  },
  {
    name: '一个名称一个名称一个名称一个名称',
    startDate: '2021-10-13',
    endDate: '2021-10-14',
    id: 2,
  },
  {
    name: '一个名称一个名称一个名称一个名称',
    startDate: '2021-10-17',
    endDate: '2021-10-18',
    id: 3,
  },
]

const dependencies: Dependence[] = [
  {
    from: 1,
    to: 2,
    type: 'finish_start',
  },
  {
    from: 2,
    to: 3,
    type: 'finish_start',
  },
]

const App = () => (
  <div style={{ width: '100%', height: 500 }}>
    <RcGantt<Data>
      dependencies={dependencies}
      data={data}
      columns={[
        {
          name: 'name',
          label: '名称',
        },
      ]}
      onUpdate={async () => true}
    />
  </div>
)

export default App

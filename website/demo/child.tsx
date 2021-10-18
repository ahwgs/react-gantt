import React from 'react'
import RcGantt from 'rc-gantt'

interface Data {
  name: string
  startDate: string
  endDate: string
}

const node = {
  name: '一个名称一个名称一个名称一个名称',
  startDate: '2021-07-10',
  endDate: '2021-07-12',
  collapsed: true,
}

const childList = [
  {
    ...node,
    children: [{ ...node, children: [{ ...node }] }],
  },
  {
    ...node,
  },
]

const data = Array.from({ length: 100 }).fill({
  ...node,
  children: childList,
}) as Data[]

const onExpand = (record, collapsed) => {
  console.log('onExpand', record, collapsed)
}

const App = () => (
  <div style={{ width: '100%', height: 500 }}>
    <RcGantt<Data>
      data={data}
      onExpand={onExpand}
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

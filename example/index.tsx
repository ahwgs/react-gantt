import * as React from 'react'
import * as ReactDOM from 'react-dom'
import RcGantt from '../dist/index.esm.js'

const data = new Array(100).fill({
  name: '一个名称一个名称一个名称一个名称',
  startDate: '2021-07-10',
  endDate: '2021-07-12',
  collapsed: false,
  children: [
    {
      startDate: '2021-07-10',
      endDate: '2021-07-12',
      name: '一个名称',
      collapsed: false,
      content: '123123123',
      children: [
        {
          startDate: '2021-07-10',
          endDate: '2021-07-12',
          name: '一个名称',
          collapsed: false,
          content: '123123123',
        },
      ],
    },
  ],
})

const App = () => {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <RcGantt
        data={data}
        columns={[
          {
            name: 'name',
            label: '名称',
            width: 200,
            maxWidth: 200,
            minWidth: 200,
          },
        ]}
        onUpdate={async () => {
          return true
        }}
        alwaysShowTaskBar
        renderLeftText={() => <span>left</span>}
        renderRightText={() => <span>right</span>}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

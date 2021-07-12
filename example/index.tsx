import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import GanttComponent from '../.'
import '../dist/rc-gantt.cjs.development.css'

const data = new Array(100).fill({
  name: '一个名称一个名称一个名称一个名称',
  startDate: '',
  endDate: '',
  collapsed: false,
  content: '123123123',
  children: [
    {
      startDate: '2021-06-30',
      endDate: '2021-07-02',
      name: '一个名称',
      collapsed: false,
      content: '123123123',
    },
  ],
})

const App = () => {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <GanttComponent
        data={data}
        columns={[
          {
            name: 'name',
            label: '名称',
            width: 200,
            maxWidth: 200,
            minWidth: 200,
          },
          {
            name: 'name1',
            label: '名称',
            width: 200,
            maxWidth: 200,
            minWidth: 200,
          },
          {
            name: 'name2',
            label: '名称',
            width: 200,
            maxWidth: 200,
            minWidth: 200,
          },
          {
            name: 'name3',
            label: '名称',
            width: 200,
            maxWidth: 200,
            minWidth: 200,
          },
        ]}
        onUpdate={async () => {
          return true
        }}
        getBarColor={() => ({
          backgroundColor: 'red',
          borderColor: 'red',
        })}
        renderBarThumb={record => record.content}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

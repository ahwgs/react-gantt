import React from 'react'
import RcGantt from 'rc-gantt'

const data = Array.from({ length: 100 }).fill({
  name: '一个名称一个名称一个名称一个名称',
  startDate: '2021-07-10',
  endDate: '2021-07-12',
})

const App = () => (
  <div style={{ width: '100%', height: 500 }}>
    <RcGantt
      data={data}
      columns={[
        {
          name: 'name',
          label: '名称',
          width: 100,
        },
      ]}
      tableIndent={0}
      renderLeftText={() => <span>左侧自定义渲染</span>}
      renderRightText={() => <span>左侧自定义渲染</span>}
      onUpdate={async () => true}
      getBarColor={() => ({
        backgroundColor: 'red',
        borderColor: 'yellow',
      })}
      renderBar={(barInfo, { width, height }) => <div style={{ width, height, backgroundColor: 'red' }}>renderBar</div>}
    />
  </div>
)

export default App

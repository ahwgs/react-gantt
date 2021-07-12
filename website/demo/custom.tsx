import React, { useState } from 'react'
import RcGantt from 'rc-gantt'

const data = Array.from({ length: 100 }).fill({
  name: '一个名称一个名称一个名称一个名称',
  startDate: '2021-07-10',
  endDate: '2021-07-12',
})

const App = () => {
  const [val1, setVal1] = useState(true)
  const [val2, setVal2] = useState(false)

  return (
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
        onUpdate={async () => true}
        getBarColor={() => ({
          backgroundColor: 'red',
          borderColor: 'yellow',
        })}
        disabled={val2}
        alwaysShowTaskBar={val1}
      />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <input checked={val1} onChange={e => setVal1(e.target.checked)} type='checkbox' />
          alwaysShowTaskBar 是否永远展示左右侧文案
        </div>
      </div>
    </div>
  )
}
export default App

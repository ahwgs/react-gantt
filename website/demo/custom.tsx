import React, { useState, useRef } from 'react'
import RcGantt, { Gantt, GanttRef } from 'rc-gantt'
import dayjs from 'dayjs'

const data = Array.from({ length: 100 }).fill({
  name: '一个名称一个名称一个名称一个名称',
  startDate: dayjs().format('YYYY-MM-DD'),
  endDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),
})

const Button = ({
  active,
  children,
  onClick,
  ...resetProps
}: {
  active: boolean
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) => (
  <button onClick={onClick} style={active ? { background: '#096dd9', color: '#fff' } : {}} {...resetProps}>
    {children}
  </button>
)

const App = () => {
  const [val1, setVal1] = useState(true)

  const [val2, setVal2] = useState<Gantt.Sight>('day')

  const ref = useRef<GanttRef>()

  const sightList: Gantt.Sight[] = ['day', 'halfYear', 'month', 'quarter', 'week']

  const onBackToday = () => {
    if (ref && ref.current) ref.current.backToday()
  }

  return (
    <div style={{ width: '100%', height: 600 }}>
      <div style={{ width: '100%', height: 500 }}>
        <RcGantt
          data={data}
          innerRef={ref}
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
          alwaysShowTaskBar={val1}
          unit={val2}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <input checked={val1} onChange={e => setVal1(e.target.checked)} type='checkbox' />
            alwaysShowTaskBar 是否永远展示左右侧文案
          </div>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <span style={{ marginRight: 20 }}>unit 当前视图</span>
            {sightList.map((s: Gantt.Sight) => (
              <Button key={s} onClick={() => setVal2(s)} active={s === val2}>
                {s}
              </Button>
            ))}
          </div>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <Button active onClick={onBackToday}>
              返回今日
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

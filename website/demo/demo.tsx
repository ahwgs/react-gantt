import RcGantt, { enUS } from 'rc-gantt'

const data = new Array(100).fill({
  name: 'Title',
  startDate: '2021-07-10',
  endDate: '2021-07-12',
  collapsed: false,
  children: [
    {
      startDate: '2021-07-10',
      endDate: '2021-07-12',
      name: 'TitleTitle',
      collapsed: false,
      content: '123123123',
    },
  ],
})

const App = () => {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <RcGantt
        data={data}
        locale={enUS}
        columns={[
          {
            name: 'name',
            label: 'Title',
            width: 200,
            maxWidth: 200,
            minWidth: 200,
          },
        ]}
        onUpdate={async () => {
          return true
        }}
      />
    </div>
  )
}

export default App

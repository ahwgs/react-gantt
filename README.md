<div align="center">
  <a href="#" target="_blank">
  <img src="https://static.ahwgs.cn/gantt_logo.png" alt="Logo" width="160" height="80">
  </a>
  <h2>rc-gantt</h2>
  <p align="center">React Gantt Component</p>
</div>

## 官网

[https://ahwgs.github.io/react-gantt/#/](https://ahwgs.github.io/react-gantt/#/)

## 快速使用

```bash
# 安装依赖
$ yarn add rc-gantt

# 使用组件

import RcGantt, { GanttProps } from 'rc-gantt'

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
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## 问题反馈

请访问 [Github](https://github.com/ahwgs/react-gantt/issues) 或加微信，备注 `rc-gantt`

<img src='https://static.ahwgs.cn/wp-content/uploads/2020/03/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200311210541.jpg' width="140">

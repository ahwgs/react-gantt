<div align="center">
  <h2>rc-gantt</h2>
  <p align="center">React Gantt Component</p>
</div>

[English](./README.md) | 简体中文

## 🐯 使用情况

[![NPM version][npm-badge]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]


[npm-badge]: https://img.shields.io/npm/v/rc-gantt.svg?style=flat
[npm-url]: https://www.npmjs.com/package/rc-gantt
[npm-downloads]: http://img.shields.io/npm/dm/rc-gantt.svg?style=flat


## 官网

[https://ahwgs.github.io/react-gantt/](https://ahwgs.github.io/react-gantt/)

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

微信号：JavaScript_97

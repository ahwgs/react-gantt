<div align="center">
  <h2>rc-gantt</h2>
  <p align="center">React Gantt Component</p>
</div>

English | [简体中文](./README.zh-CN.md)

## 🐯 Infos

[![NPM version][npm-badge]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]


[npm-badge]: https://img.shields.io/npm/v/rc-gantt.svg?style=flat
[npm-url]: https://www.npmjs.com/package/rc-gantt
[npm-downloads]: http://img.shields.io/npm/dm/rc-gantt.svg?style=flat


## WebSite

[https://ahwgs.github.io/react-gantt/#/en-US](https://ahwgs.github.io/react-gantt/#/en-US)

## Quick Start

```bash
# Install Dependencies
$ yarn add rc-gantt

# Use

import RcGantt, { GanttProps, enUS } from 'rc-gantt'

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

ReactDOM.render(<App />, document.getElementById('root'))
```

## Feedback

Please visit [Github](https://github.com/ahwgs/react-gantt/issues) Or add WeChat, note `rc-gantt`

WeChat ID: JavaScript_97

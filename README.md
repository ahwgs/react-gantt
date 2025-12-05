<div align="center">
  <h2>rc-gantt-ar</h2>
  <p align="center">React Gantt Component with Arabic (RTL) Support</p>
</div>

English | [简体中文](./README.zh-CN.md)

## 🐯 Infos

[![NPM version][npm-badge]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]

This is a fork of `rc-gantt` with added support for:
- **React 18 & 19 compatibility**
- **Arabic Locale (ar-sa)**
- **RTL (Right-to-Left) Layout**

[npm-badge]: https://img.shields.io/npm/v/rc-gantt-ar.svg?style=flat
[npm-url]: https://www.npmjs.com/package/rc-gantt-ar
[npm-downloads]: http://img.shields.io/npm/dm/rc-gantt-ar.svg?style=flat


## WebSite

[https://ahwgs.github.io/react-gantt/en-US](https://ahwgs.github.io/react-gantt/en-US)

## Quick Start

```bash
# Install Dependencies
$ npm install rc-gantt-ar
# or
$ yarn add rc-gantt-ar
```

# Use

```tsx
import RcGantt, { GanttProps, enUS, arSA } from 'rc-gantt-ar'

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
        // Use Arabic locale
        locale={arSA} 
        // Enable RTL layout
        isRTL={true}
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

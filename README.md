# 基于React的甘特图组件

## 使用

### 安装

使用yarn

```bash
yarn add rc-gantt
```

使用npm

```bash
npm install rc-gantt --save
```

### 基本使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Gantt from 'rc-gantt';

ReactDOM.render(<div style={{ width: '100%', height: 500 }}>
    <Gantt
      data={[{
        name: '一个名称',
        startDate: '2020-10-01',
        endDate: '2020-10-08',
        collapsed: false,
        children: [{
          startDate: '2020-10-01',
          endDate: '2020-10-08',
          name: '一个名称',
          collapsed: false
        }]
      }]}
      columns={[{
        name: 'name',
        label: '名称',
      }]}
      onUpdate={async () => {
        return true
      }}
    />
  </div>,document.getElementById("root"))
```

<h2 align="center">配置项</h2>

### `data`

甘特图的数据

### `startDateKey`

- 默认: `startDate`

开始时间对应的key

### `endDateKey`

- 默认: `endDate`

结束时间对应的key

### `columns`

table的列配置

### `onUpdate`

时间更新的回调，返回true代表修改成功

### `isRestDay`

- 默认: 周六和周日节假日

甘特图的节假日判断，返回true代表节假日

### `getBarColor`

任务条的颜色配置

### `showBackToday`

- 默认: `true`

是否展示回到今天的按钮

### `showUnitSwitch`

- 默认: `true`

是否展示单位切换按钮

### `unit`

- 默认: `day`

单位，可选的值有`day`,`week`,`month`,`quarter`,`halfYear`

### `onRow`

table的行事件配置，目前支持onClick

### `tableIndent`

- 默认: `30`

table每一级的缩进

### `expandIcon`

table展开图标

### `renderBar`

任务条自定义渲染

### `renderBarThumb`

创建时的任务条自定义渲染

### `onBarClick`

任务条点击回调

### `tableCollapseAble`

- 默认: `true`

是否可以收起table

### `disabled`

是否禁用编辑

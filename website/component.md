---
title: 组件
nav:
  path: /component
  title: 组件总览
  order: 1
---

<!-- 其他 Markdown 内容 -->

## 组件

### 基础使用

只需要配置 `data` `columns` `onUpdate` 即可展示一个最简甘特图

<code src="./demo/basic.tsx"></code>

### 新增任务

点击即可新建 `bar`

<code src="./demo/add.tsx"></code>

### 多级结构

确保每个节点中包含 `children` 属性，即可实现多级结构

可以通过 `onExpand` 获取当前展开的状态

<code src="./demo/child.tsx"></code>

### 自定义表格列

`columns` 类型定义见类型定义

其中，如果每列都配置 `width` 属性。组件内部会计算总宽度。默认初始化表格宽度为总宽度

<code src="./demo/column.tsx"></code>

### 依赖结构

<code src="./demo/dependence.tsx"></code>

### 自定义渲染

<code src="./demo/render.tsx"></code>

### 高级用法

主要介绍 `alwaysShowTaskBar` `unit` 以及 `innerRef` 上内置方法的使用

<code src="./demo/custom.tsx"></code>

## 类型定义

### `Column` 定义

```typescript
export type ColumnAlign = 'center' | 'right' | 'left'
export interface Column<RecordType = DefaultRecordType> {
  width?: number
  minWidth?: number
  maxWidth?: number
  flex?: number
  name: string
  label: string
  style?: Object
  render?: (item: Record<RecordType>) => React.ReactNode
  align?: ColumnAlign
}
```

### `data` 定义

其中内置了如下几个字段，如果数据中包含如下属性会做特殊处理

```typescript
export type Record<RecordType = DefaultRecordType> = RecordType & {
  group?: boolean
  borderColor?: string
  backgroundColor?: string
  collapsed?: boolean
  children?: Record<RecordType>[]
  disabled?: boolean
}
```

### `Dependence` 定义

```typescript
export type DependenceType = 'start_finish' | 'finish_start' | 'start_start' | 'finish_finish'
export interface Dependence {
  from: string
  to: string
  type: DependenceType
}
```

### `Bar` 定义

在我们需要使用一些自定义函数时，会给我们返回如下类型数据，其中 `record` 为源数据

```typescript
export interface Bar<RecordType = DefaultRecordType> {
  key: React.Key
  label: string
  width: number
  translateX: number
  translateY: number
  stepGesture: string
  invalidDateRange: boolean
  dateTextFormat: (startX: number) => string
  getDateWidth: (startX: number, endX: number) => string
  task: Item<RecordType>
  record: Record<RecordType>
  loading: boolean
  _group?: boolean
  _collapsed: boolean
  _depth: number
  _index?: number
  _childrenCount: number
  _parent?: Item<RecordType>
}
```

### `Sight` 定义

```typescript
export type Sight = 'day' | 'week' | 'month' | 'quarter' | 'halfYear'
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据源 | `Gantt.Record<RecordType>[]` |  |
| columns | 数据列 | `Gantt.Column[]` |
| dependencies | 依赖数组 | `Gantt.Dependence[]` | `[]` |
| onUpdate | 更新回调 | `(record: Gantt.Record<RecordType>, startDate: string, endDate: string) => Promise<boolean>` |
| startDateKey | 开始时间属性 key | `string` | `startDate` |
| endDateKey | 结束时间属性 key | `string` | `startDate` |
| isRestDay | 返回是否是节假日 | `(date: string) => boolean` |  |
| unit | 当前视图 | `Gantt.Sight` |  |
| rowHeight | 行高 | `number` |
| getBarColor | 返回默认条样式 | `(record: Gantt.Record<RecordType>) => {backgroundColor: string;borderColor: string}` |
| showBackToday | 展示返回今日 | `boolean` |
| showUnitSwitch | 展示视图切换 | `boolean` |
| onRow | 行事件 | `{onClick: (record: Gantt.Record<RecordType>) => void}` |
| tableIndent | 表格缩进 | `number` | `30` |
| expandIcon | 展开子节点图表 | `` |
| renderBar | 自定义渲染 bar | `renderBar?: (barInfo: Gantt.Bar<RecordType>, { width, height }: { width: number; height: number }) => React.ReactNode` |
| renderGroupBar | 自定义渲染组 |  |
| renderInvalidBar | 自定义渲染拖拽 |  |
| renderBarThumb | 自定义缩略渲染 |  |
| onBarClick | 行点击事件 | `(record: Gantt.Record<RecordType>) => void` |
| alwaysShowTaskBar | 是否展示左右侧内容 | `boolean` | `true` |
| disabled | 是否禁用图表 | `boolean` | `false` |
| renderLeftText | 自定义渲染左侧内容区 | `(barInfo: Gantt.Bar<RecordType>) => React.ReactNode` |
| renderRightText | 自定义渲染右侧内容区 | `(barInfo: Gantt.Bar<RecordType>) => React.ReactNode` |
| onExpand | 点击展开图标时触发 | `(record: Gantt.Record<RecordType>,collapsed:boolean) => void` |

## 方法

对外抛出 `innerRef`

| 参数           | 说明     | 类型       | 默认值 |
| -------------- | -------- | ---------- | ------ |
| backToday      | 返回今日 | `Function` |
| getWidthByDate | 返回事件 | `Function` |

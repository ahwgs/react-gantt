---
title: Component
nav:
  path: /component
  title: Component
  order: 1
---

<!-- 其他 Markdown 内容 -->

## Component

### Basic Component

use `data` `columns` `onUpdate` config, Show a basic Gantt chart

<code src="./demo/basic.en-US.tsx"></code>

### Add Task Bar

click to create  task`bar`

<code src="./demo/add.en-US.tsx"></code>

### Multi-level structure

Ensure that each node contains the `children` attribute to achieve a multi-level structure

You can get the current expanded status with `onExpand`

<code src="./demo/child.tsx"></code>

### Customizing table columns

`columns` type definition see Type Definition

where if each column is configured with the `width` property. The total width is calculated internally by the component. The default initialized table width is the total width

<code src="./demo/column.tsx"></code>

### Dependency Structure

<code src="./demo/dependence.tsx"></code>

### Custom Rendering

<code src="./demo/render.tsx"></code>

### Customized filtering

Default current date filtering support Day, Week, Month, Quarter, Year. Support incoming configuration to customize the filtering dimension

<code src="./demo/filterUnit.tsx"></code>

### Advanced Usage

Introducing the use of the built-in methods on `alwaysShowTaskBar`, `unit` and `innerRef`.

<code src="./demo/custom.tsx"></code>

## Type Definition

### `Column` Definition

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

### `data` Definition

The following fields are built in, and special treatment will be done if the data contains the following attributes

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

### `Dependence` Definition

```typescript
export type DependenceType = 'start_finish' | 'finish_start' | 'start_start' | 'finish_finish'
export interface Dependence {
  from: string
  to: string
  type: DependenceType
}
```

### `Bar` Definition

  When we need to use some custom functions, we will be returned the following type of data, where `record` is the source data

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

### `Sight` Definition

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

## Methods

has `innerRef`

| 参数           | 说明     | 类型       | 默认值 |
| -------------- | -------- | ---------- | ------ |
| backToday      | backToday | `Function` |
| getWidthByDate | getWidthByDate | `Function` |

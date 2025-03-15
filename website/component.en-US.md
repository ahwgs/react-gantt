---
title: Component
nav:
  path: /component
  title: Component
  order: 1
---

### Basic Component

use `data` `columns` `onUpdate` config, Show a basic Gantt chart

<code src='./demo/basic.en-US.tsx' ></code>

### Add Task Bar

click to create task`bar`

<code src='./demo/add.en-US.tsx' ></code>

### Multi-level structure

Ensure that each node contains the `children` attribute to achieve a multi-level structure

You can get the current expanded status with `onExpand`

<code src='./demo/child.tsx' ></code>

### Customizing table columns

`columns` type definition see Type Definition

where if each column is configured with the `width` property. The total width is calculated internally by the component. The default initialized table width is the total width

<code src='./demo/column.tsx' ></code>

### Dependency Structure

<code src='./demo/dependence.tsx' ></code>

### Custom Rendering

<code src='./demo/render.tsx' ></code>

### Customized filtering

Default current date filtering support Day, Week, Month, Quarter, Year. Support incoming configuration to customize the filtering dimension

<code src='./demo/filterUnit.tsx' ></code>

### Advanced Usage

Introducing the use of the built-in methods on `alwaysShowTaskBar`, `unit` and `innerRef`.

<code src='./demo/custom.tsx' ></code>

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
| data | Data | `Gantt.Record<RecordType>[]` |  |
| columns | Data columns | `Gantt.Column[]` |
| dependencies | Dependencies | `Gantt.Dependence[]` | `[]` |
| onUpdate | Update callback | `(record: Gantt.Record<RecordType>, startDate: string, endDate: string) => Promise<boolean>` |
| startDateKey | Start date key | `string` | `startDate` |
| endDateKey | End date key | `string` | `startDate` |
| isRestDay | Returns whether it is a holiday | `(date: string) => boolean` |  |
| unit | Current view | `Gantt.Sight` |  |
| rowHeight | Line height | `number` |
| columnWidth | Default column width | `number` |
| getBarColor | Returns to default bar style | `(record: Gantt.Record<RecordType>) => {backgroundColor: string;borderColor: string}` |
| showBackToday | Show `Back to Today` button | `boolean` |
| showUnitSwitch | Shows the unit switcher | `boolean` |
| onRow | Row events | `{onClick: (record: Gantt.Record<RecordType>) => void}` |
| tableIndent | Table indentation | `number` | `30` |
| expandIcon | Expand child node icon | `` |
| renderBar | Custom bar rendering | `renderBar?: (barInfo: Gantt.Bar<RecordType>, { width, height }: { width: number; height: number }) => React.ReactNode` |
| renderGroupBar | Custom group bar render |  |
| renderInvalidBar | Custom invalid bar render |  |
| renderBarThumb | Custom bar thumb render |  |
| onBarClick | On bar click callback | `(record: Gantt.Record<RecordType>) => void` |
| alwaysShowTaskBar | Whether to display the left and right side contents | `boolean` | `true` |
| disabled | Whether to disable the chart | `boolean` | `false` |
| renderLeftText | Custom rendering of the left content area | `(barInfo: Gantt.Bar<RecordType>) => React.ReactNode` |
| renderRightText | Custom rendering of the right content area | `(barInfo: Gantt.Bar<RecordType>) => React.ReactNode` |
| onExpand | On expand callback | `(record: Gantt.Record<RecordType>,collapsed:boolean) => void` |

## Methods

has `innerRef`

| 参数           | 说明           | 类型       | 默认值 |
| -------------- | -------------- | ---------- | ------ |
| backToday      | backToday      | `Function` |
| getWidthByDate | getWidthByDate | `Function` |

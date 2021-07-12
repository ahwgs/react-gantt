import { Dayjs } from 'dayjs'
import React from 'react'

export type DefaultRecordType = Record<string, any>
export namespace Gantt {
  export interface Major {
    width: number
    left: number
    label: string
    key: string
  }
  export interface MajorAmp {
    label: string
    startDate: Dayjs
    endDate: Dayjs
  }
  export interface Minor {
    width: number
    left: number
    label: string
    isWeek: boolean
    key: string
  }
  export interface MinorAmp {
    label: string
    startDate: Dayjs
    endDate: Dayjs
  }
  export type Sight = 'day' | 'week' | 'month' | 'quarter' | 'halfYear'
  export type MoveType = 'left' | 'right' | 'move' | 'create'
  export interface SightConfig {
    type: Sight
    label: string
    value: number
  }
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
  export interface Item<RecordType = DefaultRecordType> {
    record: Record<RecordType>
    key: React.Key
    startDate: string | null
    endDate: string | null
    content: string
    collapsed: boolean
    group?: boolean
    children?: Item<RecordType>[]
    _parent?: Item<RecordType>
    _bar?: Bar<RecordType>
    _depth?: number
    _index?: number
  }

  export type Record<RecordType = DefaultRecordType> = RecordType & {
    group?: boolean
    borderColor?: string
    backgroundColor?: string
    collapsed?: boolean
    children?: Record<RecordType>[]
    disabled?: boolean
  }

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
  export type DependenceType = 'start_finish' | 'finish_start' | 'start_start' | 'finish_finish'
  export interface Dependence {
    from: string
    to: string
    type: DependenceType
  }
}

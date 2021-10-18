import React, { useMemo, useRef, useEffect, useContext, useImperativeHandle } from 'react'
import { useSize } from 'ahooks'
import { Dayjs } from 'dayjs'
import Context, { GanttContext } from './context'
import GanttStore from './store'
import Divider from './components/divider'
import TimeAxis from './components/time-axis'
import TableHeader from './components/table-header'
import TableBody from './components/table-body'
import SelectionIndicator from './components/selection-indicator'
import TimeAxisScaleSelect from './components/time-axis-scale-select'
import TimeIndicator from './components/time-indicator'
import ScrollBar from './components/scroll-bar'
import Chart from './components/chart'
import ScrollTop from './components/scroll-top'
import { DefaultRecordType, Gantt } from './types'
import { BAR_HEIGHT, ROW_HEIGHT, TABLE_INDENT } from './constants'
import './Gantt.less'

const prefixCls = 'gantt'

const Body: React.FC = ({ children }) => {
  const { store } = useContext(Context)
  const reference = useRef<HTMLDivElement>(null)
  const size = useSize(reference)
  useEffect(() => {
    store.syncSize(size)
  }, [size, store])
  return (
    <div className={`${prefixCls}-body`} ref={reference}>
      {children}
    </div>
  )
}
export interface GanttProps<RecordType = DefaultRecordType> {
  data: Gantt.Record<RecordType>[]
  columns: Gantt.Column[]
  dependencies?: Gantt.Dependence[]
  onUpdate: (record: Gantt.Record<RecordType>, startDate: string, endDate: string) => Promise<boolean>
  startDateKey?: string
  endDateKey?: string
  isRestDay?: (date: string) => boolean
  unit?: Gantt.Sight
  rowHeight?: number
  innerRef?: React.MutableRefObject<GanttRef>
  getBarColor?: GanttContext<RecordType>['getBarColor']
  showBackToday?: GanttContext<RecordType>['showBackToday']
  showUnitSwitch?: GanttContext<RecordType>['showUnitSwitch']
  onRow?: GanttContext<RecordType>['onRow']
  tableIndent?: GanttContext<RecordType>['tableIndent']
  expandIcon?: GanttContext<RecordType>['expandIcon']
  renderBar?: GanttContext<RecordType>['renderBar']
  renderGroupBar?: GanttContext<RecordType>['renderGroupBar']
  renderInvalidBar?: GanttContext<RecordType>['renderInvalidBar']
  renderBarThumb?: GanttContext<RecordType>['renderBarThumb']
  onBarClick?: GanttContext<RecordType>['onBarClick']
  tableCollapseAble?: GanttContext<RecordType>['tableCollapseAble']
  scrollTop?: GanttContext<RecordType>['scrollTop']
  disabled?: boolean
  alwaysShowTaskBar?: boolean
  renderLeftText?: GanttContext<RecordType>['renderLeftText']
  renderRightText?: GanttContext<RecordType>['renderLeftText']
  onExpand?: GanttContext<RecordType>['onExpand']
}
export interface GanttRef {
  backToday: () => void
  getWidthByDate: (startDate: Dayjs, endDate: Dayjs) => number
}
const GanttComponent = <RecordType extends DefaultRecordType>(props: GanttProps<RecordType>) => {
  const {
    data,
    columns,
    dependencies = [],
    onUpdate,
    startDateKey = 'startDate',
    endDateKey = 'endDate',
    isRestDay,
    getBarColor,
    showBackToday = true,
    showUnitSwitch = true,
    unit,
    onRow,
    tableIndent = TABLE_INDENT,
    expandIcon,
    renderBar,
    renderInvalidBar,
    renderGroupBar,
    onBarClick,
    tableCollapseAble = true,
    renderBarThumb,
    scrollTop = true,
    rowHeight = ROW_HEIGHT,
    innerRef,
    disabled = false,
    alwaysShowTaskBar = true,
    renderLeftText,
    renderRightText,
    onExpand,
  } = props
  const store = useMemo(() => new GanttStore({ rowHeight, disabled }), [rowHeight])
  useEffect(() => {
    store.setData(data, startDateKey, endDateKey)
  }, [data, endDateKey, startDateKey, store])
  useEffect(() => {
    store.setColumns(columns)
  }, [columns, store])
  useEffect(() => {
    store.setOnUpdate(onUpdate)
  }, [onUpdate, store])
  useEffect(() => {
    store.setDependencies(dependencies)
  }, [dependencies, store])

  useEffect(() => {
    if (isRestDay) store.setIsRestDay(isRestDay)
  }, [isRestDay, store])
  useEffect(() => {
    if (unit) store.switchSight(unit)
  }, [unit, store])
  useImperativeHandle(innerRef, () => ({
    backToday: () => store.scrollToToday(),
    getWidthByDate: store.getWidthByDate,
  }))

  const ContextValue = React.useMemo(
    () => ({
      prefixCls,
      store,
      getBarColor,
      showBackToday,
      showUnitSwitch,
      onRow,
      tableIndent,
      expandIcon,
      renderBar,
      renderInvalidBar,
      renderGroupBar,
      onBarClick,
      tableCollapseAble,
      renderBarThumb,
      scrollTop,
      barHeight: BAR_HEIGHT,
      alwaysShowTaskBar,
      renderLeftText,
      renderRightText,
      onExpand,
    }),
    [
      store,
      getBarColor,
      showBackToday,
      showUnitSwitch,
      onRow,
      tableIndent,
      expandIcon,
      renderBar,
      renderInvalidBar,
      renderGroupBar,
      onBarClick,
      tableCollapseAble,
      renderBarThumb,
      scrollTop,
      alwaysShowTaskBar,
      renderLeftText,
      renderRightText,
      onExpand,
    ]
  )

  return (
    <Context.Provider value={ContextValue}>
      <Body>
        <header>
          <TableHeader />
          <TimeAxis />
        </header>
        <main ref={store.mainElementRef} onScroll={store.handleScroll}>
          <SelectionIndicator />
          <TableBody />
          <Chart />
        </main>
        <Divider />
        {showBackToday && <TimeIndicator />}
        {showUnitSwitch && <TimeAxisScaleSelect />}
        <ScrollBar />
        {scrollTop && <ScrollTop />}
      </Body>
    </Context.Provider>
  )
}
export default GanttComponent

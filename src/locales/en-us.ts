import { GanttLocale } from '../Gantt'

export const enUS: GanttLocale = Object.freeze({
  today: 'Today',
  dayUnit: 'Day',
  day: 'Day',
  week: 'Week',
  month: 'Month',
  quarter: 'Quarter',
  halfYear: 'Half year',
  firstHalf: '',
  secondHalf: '',
  majorFormat: {
    day: 'YYYY, MMMM',
    week: 'YYYY, MMMM',
    month: 'YYYY',
    quarter: 'YYYY',
    halfYear: 'YYYY',
  },
  minorFormat: {
    day: 'D',
    week: 'wo [week]',
    month: 'MMMM',
    quarter: '[Q]Q',
    halfYear: 'YYYY-',
  },
})

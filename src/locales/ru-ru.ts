import { GanttLocale } from "../Gantt";

export const ruRU: GanttLocale = Object.freeze({
  today: 'Сегодня',
  day: 'День',
  days: 'Дни',
  week: 'Неделя',
  month: 'Месяц',
  quarter: 'Квартал',
  halfYear: 'Полугодие',
  firstHalf: 'Первое полугодие',
  secondHalf: 'Второе полугодие',
  majorFormat: {
    day: 'MMMM YYYY',
    week: 'MMMM YYYY',
    month: 'YYYY',
    quarter: 'YYYY',
    halfYear: 'YYYY',
  },
  minorFormat: {
    day: 'D',
    week: 'wo [неделя]',
    month: 'MMMM',
    quarter: '[К]Q',
    halfYear: 'YYYY-',
  },
})

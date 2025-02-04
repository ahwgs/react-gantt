import { GanttLocale } from "../Gantt";

export const enUS: GanttLocale = Object.freeze({
    today: "Today",
    day: "Day",
    days: "Days",
    week: "Week",
    month: "Month",
    quarter: "Quarter",
    halfYear: "Half year",
    firstHalf: "First half",
    secondHalf: "Second half",
    majorFormat: {
      day: "YYYY, MMMM",
      week: "YYYY, MMMM",
      month: "YYYY",
      quarter: "YYYY",
      halfYear: "YYYY",
    },
    minorFormat: {
      day: "D",
      week: "wo [week]",
      month: "MMMM",
      quarter: "[Q]Q",
      halfYear: "YYYY-",
    }
  });
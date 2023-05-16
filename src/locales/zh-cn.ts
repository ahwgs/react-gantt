import { GanttLocale } from "../Gantt";

export const zhCN: GanttLocale = Object.freeze({
  today: "今天",
  day: "日视图",
  days: "天数",
  week: "周视图",
  month: "月视图",
  quarter: "季视图",
  halfYear: "年视图",
  firstHalf: "上半年",
  secondHalf: "下半年",
  majorFormat: {
    day: "YYYY年MM月",
    week: "YYYY年MM月",
    month: "YYYY年",
    quarter: "YYYY年",
    halfYear: "YYYY年",
  },
  minorFormat: {
    day: "YYYY-MM-D",
    week: "YYYY-w周",
    month: "YYYY-MM月",
    quarter: "YYYY-第Q季",
    halfYear: "YYYY-",
  }
});
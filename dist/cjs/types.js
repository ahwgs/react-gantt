"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gantt = exports.EGanttSightValues = void 0;
var EGanttSightValues = exports.EGanttSightValues = /*#__PURE__*/function (EGanttSightValues) {
  EGanttSightValues[EGanttSightValues["day"] = 2880] = "day";
  EGanttSightValues[EGanttSightValues["week"] = 3600] = "week";
  EGanttSightValues[EGanttSightValues["month"] = 14400] = "month";
  EGanttSightValues[EGanttSightValues["quarter"] = 86400] = "quarter";
  EGanttSightValues[EGanttSightValues["halfYear"] = 115200] = "halfYear";
  return EGanttSightValues;
}({});
var Gantt;
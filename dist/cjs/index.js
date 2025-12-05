"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  EGanttSightValues: true
};
Object.defineProperty(exports, "EGanttSightValues", {
  enumerable: true,
  get: function get() {
    return _types.EGanttSightValues;
  }
});
exports.default = void 0;
var _Gantt = _interopRequireDefault(require("./Gantt"));
var _types = require("./types");
var _locales = require("./locales");
Object.keys(_locales).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _locales[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _locales[key];
    }
  });
});
var _default = exports.default = _Gantt.default;
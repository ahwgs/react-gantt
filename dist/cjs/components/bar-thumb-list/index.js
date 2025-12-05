"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("../../context"));
var _taskBarThumb = _interopRequireDefault(require("../task-bar-thumb"));
/* eslint-disable no-underscore-dangle */

var BarThumbList = function BarThumbList() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store;
  var barList = store.getBarList;
  var _store$getVisibleRows = store.getVisibleRows,
    count = _store$getVisibleRows.count,
    start = _store$getVisibleRows.start;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, barList.slice(start, start + count).map(function (bar) {
    if (store.getTaskBarThumbVisible(bar)) return /*#__PURE__*/_react.default.createElement(_taskBarThumb.default, {
      data: bar,
      key: bar.key
    });
    return null;
  }));
};
var _default = exports.default = (0, _mobxReactLite.observer)(BarThumbList);
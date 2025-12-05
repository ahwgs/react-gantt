"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("../../context"));
require("./index.css");
var TableHeader = function TableHeader() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var columns = store.columns,
    tableWidth = store.tableWidth;
  var width = tableWidth;
  var columnsWidth = store.getColumnsWidth;
  var prefixClsTableHeader = "".concat(prefixCls, "-table-header");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: prefixClsTableHeader,
    style: {
      width: width,
      height: 56
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsTableHeader, "-head"),
    style: {
      width: width,
      height: 56
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsTableHeader, "-row"),
    style: {
      height: 56
    }
  }, columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: column.name,
      className: "".concat(prefixClsTableHeader, "-cell"),
      style: (0, _objectSpread2.default)({
        width: columnsWidth[index],
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
        textAlign: column.align ? column.align : 'left'
      }, column.style)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixClsTableHeader, "-head-cell")
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixClsTableHeader, "-ellipsis")
    }, column.label)));
  }))));
};
var _default = exports.default = (0, _mobxReactLite.observer)(TableHeader);
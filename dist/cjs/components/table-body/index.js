"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classnames = _interopRequireDefault(require("classnames"));
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _constants = require("../../constants");
var _context = _interopRequireDefault(require("../../context"));
var _RowToggler = _interopRequireDefault(require("./RowToggler"));
require("./index.css");
var TableRows = function TableRows() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    onRow = _useContext.onRow,
    tableIndent = _useContext.tableIndent,
    expandIcon = _useContext.expandIcon,
    prefixCls = _useContext.prefixCls,
    onExpand = _useContext.onExpand,
    loading = _useContext.loading;
  var columns = store.columns,
    rowHeight = store.rowHeight,
    isRTL = store.isRTL;
  var columnsWidth = store.getColumnsWidth;
  var barList = store.getBarList;
  var _store$getVisibleRows = store.getVisibleRows,
    count = _store$getVisibleRows.count,
    start = _store$getVisibleRows.start;
  var prefixClsTableBody = "".concat(prefixCls, "-table-body");
  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        textAlign: 'center',
        color: ' rgba(0,0,0,0.65)',
        marginTop: 30
      }
    }, store.locale.loading);
  }
  if (barList.length === 0) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        textAlign: 'center',
        color: ' rgba(0,0,0,0.65)',
        marginTop: 30
      }
    }, store.locale.noData);
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, barList.slice(start, start + count).map(function (bar, rowIndex) {
    // 父元素如果是其最后一个祖先的子，要隐藏上一层的线
    var parent = bar._parent;
    var parentItem = parent === null || parent === void 0 ? void 0 : parent._parent;
    var isLastChild = false;
    if (parentItem !== null && parentItem !== void 0 && parentItem.children && parentItem.children[parentItem.children.length - 1] === bar._parent) isLastChild = true;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: bar.key,
      role: "none",
      className: "".concat(prefixClsTableBody, "-row"),
      style: {
        height: rowHeight,
        top: (rowIndex + start) * rowHeight + _constants.TOP_PADDING
      },
      onClick: function onClick() {
        onRow === null || onRow === void 0 || onRow.onClick(bar.record);
      }
    }, columns.map(function (column, index) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: column.name,
        className: "".concat(prefixClsTableBody, "-cell"),
        style: (0, _objectSpread2.default)({
          width: columnsWidth[index],
          minWidth: column.minWidth,
          maxWidth: column.maxWidth,
          textAlign: column.align ? column.align : isRTL ? 'right' : 'left',
          paddingLeft: !isRTL && index === 0 ? tableIndent * (bar._depth + 1) + 10 : 12,
          paddingRight: isRTL && index === 0 ? tableIndent * (bar._depth + 1) + 10 : 12
        }, column.style)
      }, index === 0 && new Array(bar._depth).fill(0).map(function (_, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: i,
          className: (0, _classnames.default)("".concat(prefixClsTableBody, "-row-indentation"), (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixClsTableBody, "-row-indentation-hidden"), isLastChild && i === bar._depth - 2), "".concat(prefixClsTableBody, "-row-indentation-both"), i === bar._depth - 1)),
          style: (0, _defineProperty2.default)((0, _defineProperty2.default)({
            top: -(rowHeight / 2) + 1
          }, isRTL ? 'right' : 'left', tableIndent * i + 15), "width", tableIndent * 1.5 + 5)
        });
      }), index === 0 && bar._childrenCount > 0 && /*#__PURE__*/_react.default.createElement("div", {
        style: (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
          position: 'absolute'
        }, isRTL ? 'right' : 'left', tableIndent * bar._depth + 15), "background", 'white'), "zIndex", 9), "transform", isRTL ? 'translateX(52%)' : 'translateX(-52%)'), "padding", 1)
      }, expandIcon ? expandIcon({
        level: bar._depth,
        collapsed: bar._collapsed,
        onClick: function onClick(event) {
          event.stopPropagation();
          if (onExpand) onExpand(bar.task.record, !bar._collapsed);
          store.setRowCollapse(bar.task, !bar._collapsed);
        }
      }) : /*#__PURE__*/_react.default.createElement(_RowToggler.default, {
        prefixCls: prefixCls,
        level: bar._depth,
        collapsed: bar._collapsed,
        onClick: function onClick(event) {
          event.stopPropagation();
          if (onExpand) onExpand(bar.task.record, !bar._collapsed);
          store.setRowCollapse(bar.task, !bar._collapsed);
        }
      })), /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixClsTableBody, "-ellipsis")
      }, column.render ? column.render(bar.record) : bar.record[column.name]));
    }));
  }));
};
var ObserverTableRows = (0, _mobxReactLite.observer)(TableRows);
var TableBorders = function TableBorders() {
  var _useContext2 = (0, _react.useContext)(_context.default),
    store = _useContext2.store,
    prefixCls = _useContext2.prefixCls;
  var columns = store.columns,
    isRTL = store.isRTL;
  var columnsWidth = store.getColumnsWidth;
  var barList = store.getBarList;
  if (barList.length === 0) return null;
  var prefixClsTableBody = "".concat(prefixCls, "-table-body");
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "none",
    className: "".concat(prefixClsTableBody, "-border_row")
  }, columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: column.name,
      className: "".concat(prefixClsTableBody, "-cell"),
      style: (0, _objectSpread2.default)({
        width: columnsWidth[index],
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
        textAlign: column.align ? column.align : isRTL ? 'right' : 'left'
      }, column.style)
    });
  }));
};
var ObserverTableBorders = (0, _mobxReactLite.observer)(TableBorders);
var TableBody = function TableBody() {
  var _useContext3 = (0, _react.useContext)(_context.default),
    store = _useContext3.store,
    prefixCls = _useContext3.prefixCls;
  var handleMouseMove = (0, _react.useCallback)(function (event) {
    event.persist();
    store.handleMouseMove(event);
  }, [store]);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    store.handleMouseLeave();
  }, [store]);
  var prefixClsTableBody = "".concat(prefixCls, "-table-body");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: prefixClsTableBody,
    style: {
      width: store.tableWidth,
      height: store.bodyScrollHeight
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/_react.default.createElement(ObserverTableBorders, null), /*#__PURE__*/_react.default.createElement(ObserverTableRows, null));
};
var _default = exports.default = (0, _mobxReactLite.observer)(TableBody);
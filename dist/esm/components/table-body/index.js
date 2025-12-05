import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext } from 'react';
import { TOP_PADDING } from "../../constants";
import Context from "../../context";
import RowToggler from "./RowToggler";
import "./index.css";
var TableRows = function TableRows() {
  var _useContext = useContext(Context),
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
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        color: ' rgba(0,0,0,0.65)',
        marginTop: 30
      }
    }, store.locale.loading);
  }
  if (barList.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        color: ' rgba(0,0,0,0.65)',
        marginTop: 30
      }
    }, store.locale.noData);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, barList.slice(start, start + count).map(function (bar, rowIndex) {
    // 父元素如果是其最后一个祖先的子，要隐藏上一层的线
    var parent = bar._parent;
    var parentItem = parent === null || parent === void 0 ? void 0 : parent._parent;
    var isLastChild = false;
    if (parentItem !== null && parentItem !== void 0 && parentItem.children && parentItem.children[parentItem.children.length - 1] === bar._parent) isLastChild = true;
    return /*#__PURE__*/React.createElement("div", {
      key: bar.key,
      role: "none",
      className: "".concat(prefixClsTableBody, "-row"),
      style: {
        height: rowHeight,
        top: (rowIndex + start) * rowHeight + TOP_PADDING
      },
      onClick: function onClick() {
        onRow === null || onRow === void 0 || onRow.onClick(bar.record);
      }
    }, columns.map(function (column, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: column.name,
        className: "".concat(prefixClsTableBody, "-cell"),
        style: _objectSpread({
          width: columnsWidth[index],
          minWidth: column.minWidth,
          maxWidth: column.maxWidth,
          textAlign: column.align ? column.align : isRTL ? 'right' : 'left',
          paddingLeft: !isRTL && index === 0 ? tableIndent * (bar._depth + 1) + 10 : 12,
          paddingRight: isRTL && index === 0 ? tableIndent * (bar._depth + 1) + 10 : 12
        }, column.style)
      }, index === 0 && new Array(bar._depth).fill(0).map(function (_, i) {
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          className: classNames("".concat(prefixClsTableBody, "-row-indentation"), _defineProperty(_defineProperty({}, "".concat(prefixClsTableBody, "-row-indentation-hidden"), isLastChild && i === bar._depth - 2), "".concat(prefixClsTableBody, "-row-indentation-both"), i === bar._depth - 1)),
          style: _defineProperty(_defineProperty({
            top: -(rowHeight / 2) + 1
          }, isRTL ? 'right' : 'left', tableIndent * i + 15), "width", tableIndent * 1.5 + 5)
        });
      }), index === 0 && bar._childrenCount > 0 && /*#__PURE__*/React.createElement("div", {
        style: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
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
      }) : /*#__PURE__*/React.createElement(RowToggler, {
        prefixCls: prefixCls,
        level: bar._depth,
        collapsed: bar._collapsed,
        onClick: function onClick(event) {
          event.stopPropagation();
          if (onExpand) onExpand(bar.task.record, !bar._collapsed);
          store.setRowCollapse(bar.task, !bar._collapsed);
        }
      })), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixClsTableBody, "-ellipsis")
      }, column.render ? column.render(bar.record) : bar.record[column.name]));
    }));
  }));
};
var ObserverTableRows = observer(TableRows);
var TableBorders = function TableBorders() {
  var _useContext2 = useContext(Context),
    store = _useContext2.store,
    prefixCls = _useContext2.prefixCls;
  var columns = store.columns,
    isRTL = store.isRTL;
  var columnsWidth = store.getColumnsWidth;
  var barList = store.getBarList;
  if (barList.length === 0) return null;
  var prefixClsTableBody = "".concat(prefixCls, "-table-body");
  return /*#__PURE__*/React.createElement("div", {
    role: "none",
    className: "".concat(prefixClsTableBody, "-border_row")
  }, columns.map(function (column, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: column.name,
      className: "".concat(prefixClsTableBody, "-cell"),
      style: _objectSpread({
        width: columnsWidth[index],
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
        textAlign: column.align ? column.align : isRTL ? 'right' : 'left'
      }, column.style)
    });
  }));
};
var ObserverTableBorders = observer(TableBorders);
var TableBody = function TableBody() {
  var _useContext3 = useContext(Context),
    store = _useContext3.store,
    prefixCls = _useContext3.prefixCls;
  var handleMouseMove = useCallback(function (event) {
    event.persist();
    store.handleMouseMove(event);
  }, [store]);
  var handleMouseLeave = useCallback(function () {
    store.handleMouseLeave();
  }, [store]);
  var prefixClsTableBody = "".concat(prefixCls, "-table-body");
  return /*#__PURE__*/React.createElement("div", {
    className: prefixClsTableBody,
    style: {
      width: store.tableWidth,
      height: store.bodyScrollHeight
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/React.createElement(ObserverTableBorders, null), /*#__PURE__*/React.createElement(ObserverTableRows, null));
};
export default observer(TableBody);
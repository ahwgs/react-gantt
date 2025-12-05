import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Context from "../../context";
import "./index.css";
var TableHeader = function TableHeader() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var columns = store.columns,
    tableWidth = store.tableWidth;
  var width = tableWidth;
  var columnsWidth = store.getColumnsWidth;
  var prefixClsTableHeader = "".concat(prefixCls, "-table-header");
  return /*#__PURE__*/React.createElement("div", {
    className: prefixClsTableHeader,
    style: {
      width: width,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsTableHeader, "-head"),
    style: {
      width: width,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsTableHeader, "-row"),
    style: {
      height: 56
    }
  }, columns.map(function (column, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: column.name,
      className: "".concat(prefixClsTableHeader, "-cell"),
      style: _objectSpread({
        width: columnsWidth[index],
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
        textAlign: column.align ? column.align : 'left'
      }, column.style)
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixClsTableHeader, "-head-cell")
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixClsTableHeader, "-ellipsis")
    }, column.label)));
  }))));
};
export default observer(TableHeader);
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { observer } from 'mobx-react-lite';
import React, { memo, useCallback, useContext, useEffect } from 'react';
import Context from "../../context";
import BarList from "../bar-list";
import BarThumbList from "../bar-thumb-list";
import Dependencies from "../dependencies";
import DragPresent from "../drag-present";
import Today from "../today";
import "./index.css";
var Chart = function Chart() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var tableWidth = store.tableWidth,
    viewWidth = store.viewWidth,
    bodyScrollHeight = store.bodyScrollHeight,
    translateX = store.translateX,
    chartElementRef = store.chartElementRef;
  var minorList = store.getMinorList();
  var handleMouseMove = useCallback(function (event) {
    event.persist();
    store.handleMouseMove(event);
  }, [store]);
  var handleMouseLeave = useCallback(function () {
    store.handleMouseLeave();
  }, [store]);
  useEffect(function () {
    var element = chartElementRef.current;
    if (element) element.addEventListener('wheel', store.handleWheel);
    return function () {
      if (element) element.removeEventListener('wheel', store.handleWheel);
    };
  }, [chartElementRef, store]);
  return /*#__PURE__*/React.createElement("div", {
    ref: chartElementRef,
    className: "".concat(prefixCls, "-chart"),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: _defineProperty(_defineProperty(_defineProperty({}, store.isRTL ? 'right' : 'left', tableWidth), "width", viewWidth), "height", bodyScrollHeight)
  }, /*#__PURE__*/React.createElement("svg", {
    className: "".concat(prefixCls, "-chart-svg-renderer"),
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: viewWidth,
    height: bodyScrollHeight,
    viewBox: "".concat(translateX, " 0 ").concat(viewWidth, " ").concat(bodyScrollHeight)
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "repeat",
    width: "4.5",
    height: "10",
    patternUnits: "userSpaceOnUse",
    patternTransform: "rotate(70 50 50)"
  }, /*#__PURE__*/React.createElement("line", {
    stroke: "#c6c6c6",
    strokeWidth: "1px",
    y2: "10"
  }))), minorList.map(function (item) {
    return item.isWeek ? /*#__PURE__*/React.createElement("g", {
      key: item.key,
      stroke: "#f0f0f0"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M".concat(item.left, ",0 L").concat(item.left, ",").concat(bodyScrollHeight)
    }), /*#__PURE__*/React.createElement("rect", {
      fill: "url(#repeat)",
      opacity: "0.5",
      strokeWidth: "0",
      x: item.left,
      y: 0,
      width: item.width,
      height: bodyScrollHeight
    })) : /*#__PURE__*/React.createElement("g", {
      key: item.key,
      stroke: "#f0f0f0"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M".concat(item.left, ",0 L").concat(item.left, ",").concat(bodyScrollHeight)
    }));
  }), /*#__PURE__*/React.createElement(DragPresent, null), /*#__PURE__*/React.createElement(Dependencies, null)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-render-chunk"),
    style: {
      height: bodyScrollHeight,
      transform: "translateX(-".concat(translateX, "px")
    }
  }, /*#__PURE__*/React.createElement(BarThumbList, null), /*#__PURE__*/React.createElement(BarList, null), /*#__PURE__*/React.createElement(Today, null)));
};
export default /*#__PURE__*/memo(observer(Chart));
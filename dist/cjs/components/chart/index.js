"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("../../context"));
var _barList = _interopRequireDefault(require("../bar-list"));
var _barThumbList = _interopRequireDefault(require("../bar-thumb-list"));
var _dependencies = _interopRequireDefault(require("../dependencies"));
var _dragPresent = _interopRequireDefault(require("../drag-present"));
var _today = _interopRequireDefault(require("../today"));
require("./index.css");
var Chart = function Chart() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var tableWidth = store.tableWidth,
    viewWidth = store.viewWidth,
    bodyScrollHeight = store.bodyScrollHeight,
    translateX = store.translateX,
    chartElementRef = store.chartElementRef;
  var minorList = store.getMinorList();
  var handleMouseMove = (0, _react.useCallback)(function (event) {
    event.persist();
    store.handleMouseMove(event);
  }, [store]);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    store.handleMouseLeave();
  }, [store]);
  (0, _react.useEffect)(function () {
    var element = chartElementRef.current;
    if (element) element.addEventListener('wheel', store.handleWheel);
    return function () {
      if (element) element.removeEventListener('wheel', store.handleWheel);
    };
  }, [chartElementRef, store]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: chartElementRef,
    className: "".concat(prefixCls, "-chart"),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, store.isRTL ? 'right' : 'left', tableWidth), "width", viewWidth), "height", bodyScrollHeight)
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "".concat(prefixCls, "-chart-svg-renderer"),
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: viewWidth,
    height: bodyScrollHeight,
    viewBox: "".concat(translateX, " 0 ").concat(viewWidth, " ").concat(bodyScrollHeight)
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("pattern", {
    id: "repeat",
    width: "4.5",
    height: "10",
    patternUnits: "userSpaceOnUse",
    patternTransform: "rotate(70 50 50)"
  }, /*#__PURE__*/_react.default.createElement("line", {
    stroke: "#c6c6c6",
    strokeWidth: "1px",
    y2: "10"
  }))), minorList.map(function (item) {
    return item.isWeek ? /*#__PURE__*/_react.default.createElement("g", {
      key: item.key,
      stroke: "#f0f0f0"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M".concat(item.left, ",0 L").concat(item.left, ",").concat(bodyScrollHeight)
    }), /*#__PURE__*/_react.default.createElement("rect", {
      fill: "url(#repeat)",
      opacity: "0.5",
      strokeWidth: "0",
      x: item.left,
      y: 0,
      width: item.width,
      height: bodyScrollHeight
    })) : /*#__PURE__*/_react.default.createElement("g", {
      key: item.key,
      stroke: "#f0f0f0"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M".concat(item.left, ",0 L").concat(item.left, ",").concat(bodyScrollHeight)
    }));
  }), /*#__PURE__*/_react.default.createElement(_dragPresent.default, null), /*#__PURE__*/_react.default.createElement(_dependencies.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-render-chunk"),
    style: {
      height: bodyScrollHeight,
      transform: "translateX(-".concat(translateX, "px")
    }
  }, /*#__PURE__*/_react.default.createElement(_barThumbList.default, null), /*#__PURE__*/_react.default.createElement(_barList.default, null), /*#__PURE__*/_react.default.createElement(_today.default, null)));
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)((0, _mobxReactLite.observer)(Chart));
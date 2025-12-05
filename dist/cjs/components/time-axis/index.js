"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _mobxReactLite = require("mobx-react-lite");
var _classnames = _interopRequireDefault(require("classnames"));
var _dragResize = _interopRequireDefault(require("../drag-resize"));
var _context = _interopRequireDefault(require("../../context"));
require("./index.css");
var TimeAxis = function TimeAxis() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var prefixClsTimeAxis = "".concat(prefixCls, "-time-axis");
  var sightConfig = store.sightConfig,
    isToday = store.isToday;
  var majorList = store.getMajorList();
  var minorList = store.getMinorList();
  var handleResize = (0, _react.useCallback)(function (_ref) {
    var x = _ref.x;
    store.handlePanMove(-x);
  }, [store]);
  var handleLeftResizeEnd = (0, _react.useCallback)(function () {
    store.handlePanEnd();
  }, [store]);
  var getIsToday = (0, _react.useCallback)(function (item) {
    var key = item.key;
    var type = sightConfig.type;
    return type === 'day' && isToday(key);
  }, [sightConfig, isToday]);
  return /*#__PURE__*/_react.default.createElement(_dragResize.default, {
    onResize: handleResize,
    onResizeEnd: handleLeftResizeEnd,
    defaultSize: {
      x: -store.translateX,
      width: 0
    },
    type: "move"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixClsTimeAxis,
    style: (0, _defineProperty2.default)((0, _defineProperty2.default)({}, store.isRTL ? 'right' : 'left', store.tableWidth), "width", store.viewWidth)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsTimeAxis, "-render-chunk"),
    style: {
      transform: "translateX(-".concat(store.translateX, "px")
    }
  }, majorList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.key,
      className: "".concat(prefixClsTimeAxis, "-major"),
      style: {
        width: item.width,
        left: item.left
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixClsTimeAxis, "-major-label")
    }, item.label));
  }), minorList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.key,
      className: (0, _classnames.default)("".concat(prefixClsTimeAxis, "-minor")),
      style: {
        width: item.width,
        left: item.left
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)("".concat(prefixClsTimeAxis, "-minor-label"), (0, _defineProperty2.default)({}, "".concat(prefixClsTimeAxis, "-today"), getIsToday(item)))
    }, item.label));
  }))));
};
var _default = exports.default = (0, _mobxReactLite.observer)(TimeAxis);
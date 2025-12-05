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
var _context = _interopRequireDefault(require("../../context"));
require("./index.css");
var TimeIndicator = function TimeIndicator() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var scrolling = store.scrolling,
    translateX = store.translateX,
    tableWidth = store.tableWidth,
    viewWidth = store.viewWidth,
    todayTranslateX = store.todayTranslateX,
    locale = store.locale;
  var prefixClsTimeIndicator = "".concat(prefixCls, "-time-indicator");
  var type = todayTranslateX < translateX ? 'left' : 'right';
  var left = type === 'left' ? tableWidth : 'unset';
  var right = type === 'right' ? 111 : 'unset';
  var display = (0, _react.useMemo)(function () {
    var isOverLeft = todayTranslateX < translateX;
    var isOverRight = todayTranslateX > translateX + viewWidth;
    return isOverLeft || isOverRight ? 'block' : 'none';
  }, [todayTranslateX, translateX, viewWidth]);
  var handleClick = (0, _react.useCallback)(function () {
    store.scrollToToday();
  }, [store]);
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleClick,
    className: (0, _classnames.default)(prefixClsTimeIndicator, (0, _defineProperty2.default)({}, "".concat(prefixClsTimeIndicator, "-scrolling"), scrolling)),
    type: "button",
    "data-role": "button",
    style: {
      left: left,
      right: right,
      display: display
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, locale.today));
};
var _default = exports.default = (0, _mobxReactLite.observer)(TimeIndicator);
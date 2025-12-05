"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _usePersistFn = require("../../utils/usePersistFn");
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("../../context"));
require("./index.css");
var ScrollBar = function ScrollBar() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var tableWidth = store.tableWidth,
    viewWidth = store.viewWidth;
  var width = store.scrollBarWidth;
  var prefixClsScrollBar = "".concat(prefixCls, "-scroll_bar");
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    resizing = _useState2[0],
    setResizing = _useState2[1];
  var positionRef = (0, _react.useRef)({
    scrollLeft: 0,
    left: 0,
    translateX: 0
  });
  var handleMouseMove = (0, _usePersistFn.usePersistFn)(function (event) {
    var distance = event.clientX - positionRef.current.left;
    // TODO 调整倍率
    store.setTranslateX(distance * (store.viewWidth / store.scrollBarWidth) + positionRef.current.translateX);
  });
  var handleMouseUp = (0, _react.useCallback)(function () {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    setResizing(false);
  }, [handleMouseMove]);
  var handleMouseDown = (0, _react.useCallback)(function (event) {
    positionRef.current.left = event.clientX;
    positionRef.current.translateX = store.translateX;
    positionRef.current.scrollLeft = store.scrollLeft;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    setResizing(true);
  }, [handleMouseMove, handleMouseUp, store.scrollLeft, store.translateX]);
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "none",
    className: prefixClsScrollBar,
    style: (0, _defineProperty2.default)((0, _defineProperty2.default)({}, store.isRTL ? 'right' : 'left', tableWidth), "width", viewWidth),
    onMouseDown: handleMouseDown
  }, resizing && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 9999,
      cursor: 'col-resize'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsScrollBar, "-thumb"),
    style: {
      width: width,
      left: store.scrollLeft
    }
  }));
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)((0, _mobxReactLite.observer)(ScrollBar));
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _usePersistFn = require("../../utils/usePersistFn");
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _AutoScroller = _interopRequireDefault(require("./AutoScroller"));
var _excluded = ["type", "onBeforeResize", "onResize", "onResizeEnd", "minWidth", "grid", "defaultSize", "scroller", "autoScroll", "onAutoScroll", "reachEdge", "clickStart", "children", "disabled"];
var snap = function snap(n, size) {
  return Math.round(n / size) * size;
};
var DragResize = function DragResize(_ref) {
  var type = _ref.type,
    onBeforeResize = _ref.onBeforeResize,
    onResize = _ref.onResize,
    onResizeEnd = _ref.onResizeEnd,
    _ref$minWidth = _ref.minWidth,
    minWidth = _ref$minWidth === void 0 ? 0 : _ref$minWidth,
    grid = _ref.grid,
    _ref$defaultSize = _ref.defaultSize,
    defaultX = _ref$defaultSize.x,
    defaultWidth = _ref$defaultSize.width,
    scroller = _ref.scroller,
    _ref$autoScroll = _ref.autoScroll,
    enableAutoScroll = _ref$autoScroll === void 0 ? true : _ref$autoScroll,
    onAutoScroll = _ref.onAutoScroll,
    _ref$reachEdge = _ref.reachEdge,
    reachEdge = _ref$reachEdge === void 0 ? function () {
      return false;
    } : _ref$reachEdge,
    _ref$clickStart = _ref.clickStart,
    clickStart = _ref$clickStart === void 0 ? false : _ref$clickStart,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    otherProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    resizing = _useState2[0],
    setResizing = _useState2[1];
  var handleAutoScroll = (0, _usePersistFn.usePersistFn)(function (delta) {
    updateSize();
    onAutoScroll && onAutoScroll(delta);
  });
  // TODO persist reachEdge
  var autoScroll = (0, _react.useMemo)(function () {
    return new _AutoScroller.default({
      scroller: scroller,
      onAutoScroll: handleAutoScroll,
      reachEdge: reachEdge
    });
  }, [handleAutoScroll, scroller, reachEdge]);
  var positionRef = (0, _react.useRef)({
    clientX: 0,
    width: defaultWidth,
    x: defaultX
  });
  var moveRef = (0, _react.useRef)({
    clientX: 0
  });
  var updateSize = (0, _usePersistFn.usePersistFn)(function () {
    if (disabled) return;
    var distance = moveRef.current.clientX - positionRef.current.clientX + autoScroll.autoScrollPos;
    switch (type) {
      case 'left':
        {
          var width = positionRef.current.width - distance;
          if (minWidth !== undefined) width = Math.max(width, minWidth);
          if (grid) width = snap(width, grid);
          var pos = width - positionRef.current.width;
          var x = positionRef.current.x - pos;
          onResize({
            width: width,
            x: x
          });
          break;
        }
      // 向右，x不变，只变宽度
      case 'right':
        {
          var _width = positionRef.current.width + distance;
          if (minWidth !== undefined) _width = Math.max(_width, minWidth);
          if (grid) _width = snap(_width, grid);
          var _x = positionRef.current.x;
          onResize({
            width: _width,
            x: _x
          });
          break;
        }
      case 'move':
        {
          var _width2 = positionRef.current.width;
          var rightDistance = distance;
          if (grid) rightDistance = snap(distance, grid);
          var _x2 = positionRef.current.x + rightDistance;
          onResize({
            width: _width2,
            x: _x2
          });
          break;
        }
    }
  });
  var handleMouseMove = (0, _usePersistFn.usePersistFn)(function (event) {
    if (disabled) return;
    if (!resizing) {
      setResizing(true);
      if (!clickStart) onBeforeResize && onBeforeResize();
    }
    moveRef.current.clientX = event.clientX;
    updateSize();
  });
  var handleMouseUp = (0, _usePersistFn.usePersistFn)(function () {
    if (disabled) return;
    autoScroll.stop();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    if (resizing) {
      setResizing(false);
      onResizeEnd && onResizeEnd({
        x: positionRef.current.x,
        width: positionRef.current.width
      });
    }
  });
  var handleMouseDown = (0, _usePersistFn.usePersistFn)(function (event) {
    if (disabled) return;
    event.stopPropagation();
    if (enableAutoScroll && scroller) autoScroll.start();
    if (clickStart) {
      onBeforeResize && onBeforeResize();
      setResizing(true);
    }
    positionRef.current.clientX = event.clientX;
    positionRef.current.x = defaultX;
    positionRef.current.width = defaultWidth;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    role: "none",
    onMouseDown: handleMouseDown
  }, otherProps), resizing && /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 9999,
      cursor: disabled ? 'not-allowed' : 'col-resize'
    }
  }), document.body), children);
};
var _default = exports.default = (0, _mobxReactLite.observer)(DragResize);
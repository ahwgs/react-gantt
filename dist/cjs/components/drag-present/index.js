"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _mobxReactLite = require("mobx-react-lite");
var _context = _interopRequireDefault(require("../../context"));
/**
 * 拖动时的提示条
 */
var DragPresent = function DragPresent() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store;
  var dragging = store.dragging,
    draggingType = store.draggingType,
    bodyScrollHeight = store.bodyScrollHeight;
  if (!dragging) {
    return null;
  }
  // 和当前拖动的块一样长
  var width = dragging.width,
    translateX = dragging.translateX;
  var left = translateX;
  var right = translateX + width;
  var leftLine = draggingType === 'left' || draggingType === 'move';
  var rightLine = draggingType === 'right' || draggingType === 'move';
  return /*#__PURE__*/_react.default.createElement("g", {
    fill: "#DAE0FF",
    stroke: "#7B90FF"
  }, leftLine && /*#__PURE__*/_react.default.createElement("path", {
    d: "M".concat(left, ",0 L").concat(left, ",").concat(bodyScrollHeight)
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: left,
    y: "0",
    width: width,
    height: bodyScrollHeight,
    strokeWidth: "0"
  }), rightLine && /*#__PURE__*/_react.default.createElement("path", {
    d: "M".concat(right, ",0 L").concat(right, ",").concat(bodyScrollHeight)
  }));
};
var _default = exports.default = (0, _mobxReactLite.observer)(DragPresent);
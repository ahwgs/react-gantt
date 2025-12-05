"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDragResize;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _usePersistFn = require("../utils/usePersistFn");
function useDragResize(handleResize, _ref) {
  var initSize = _ref.initSize,
    minWidthConfig = _ref.minWidth,
    maxWidthConfig = _ref.maxWidth,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 1 : _ref$direction;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    resizing = _useState2[0],
    setResizing = _useState2[1];
  var positionRef = (0, _react.useRef)({
    left: 0
  });
  var initSizeRef = (0, _react.useRef)(initSize);
  var handleMouseMove = (0, _usePersistFn.usePersistFn)( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(event) {
      var distance, width;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            distance = event.clientX - positionRef.current.left;
            width = initSizeRef.current.width + distance * direction;
            if (minWidthConfig !== undefined) {
              width = Math.max(width, minWidthConfig);
            }
            if (maxWidthConfig !== undefined) {
              width = Math.min(width, maxWidthConfig);
            }
            handleResize({
              width: width
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  var handleMouseUp = (0, _react.useCallback)(function () {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    setResizing(false);
  }, [handleMouseMove]);
  var handleMouseDown = (0, _react.useCallback)(function (event) {
    positionRef.current.left = event.clientX;
    initSizeRef.current = initSize;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    setResizing(true);
  }, [handleMouseMove, handleMouseUp, initSize]);
  return [handleMouseDown, resizing];
}
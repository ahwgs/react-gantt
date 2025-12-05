import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { useCallback, useRef, useState } from 'react';
import { usePersistFn } from "../utils/usePersistFn";
export default function useDragResize(handleResize, _ref) {
  var initSize = _ref.initSize,
    minWidthConfig = _ref.minWidth,
    maxWidthConfig = _ref.maxWidth,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 1 : _ref$direction;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    resizing = _useState2[0],
    setResizing = _useState2[1];
  var positionRef = useRef({
    left: 0
  });
  var initSizeRef = useRef(initSize);
  var handleMouseMove = usePersistFn( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
      var distance, width;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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
  var handleMouseUp = useCallback(function () {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    setResizing(false);
  }, [handleMouseMove]);
  var handleMouseDown = useCallback(function (event) {
    positionRef.current.left = event.clientX;
    initSizeRef.current = initSize;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    setResizing(true);
  }, [handleMouseMove, handleMouseUp, initSize]);
  return [handleMouseDown, resizing];
}
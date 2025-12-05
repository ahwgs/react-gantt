"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePersistFn = usePersistFn;
var _react = require("react");
/**
 * Compatibility shim for ahooks usePersistFn
 * Creates a function that maintains the same reference across renders
 * while always calling the latest version of the function
 */
function usePersistFn(fn) {
  var fnRef = (0, _react.useRef)(fn);
  fnRef.current = fn;
  var persistFn = (0, _react.useCallback)(function () {
    return fnRef.current.apply(fnRef, arguments);
  }, []);
  return persistFn;
}
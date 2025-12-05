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
require("./index.css");
/**
 * 鼠标hover效果模拟
 */
var SelectionIndicator = function SelectionIndicator() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var showSelectionIndicator = store.showSelectionIndicator,
    selectionIndicatorTop = store.selectionIndicatorTop,
    rowHeight = store.rowHeight;
  var prefixClsSelectionIndicator = "".concat(prefixCls, "-selection-indicator");
  return showSelectionIndicator ? /*#__PURE__*/_react.default.createElement("div", {
    className: prefixClsSelectionIndicator,
    style: {
      height: rowHeight,
      top: selectionIndicatorTop
    }
  }) : null;
};
var _default = exports.default = (0, _mobxReactLite.observer)(SelectionIndicator);
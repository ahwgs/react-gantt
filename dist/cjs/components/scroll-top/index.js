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
var ScrollTop = function ScrollTop() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    scrollTopConfig = _useContext.scrollTop,
    prefixCls = _useContext.prefixCls;
  var scrollTop = store.scrollTop;
  var handleClick = (0, _react.useCallback)(function () {
    if (store.mainElementRef.current) {
      store.mainElementRef.current.scrollTop = 0;
    }
  }, [store.mainElementRef]);
  if (scrollTop <= 100 || !store.mainElementRef.current) {
    return null;
  }
  var prefixClsScrollTop = "".concat(prefixCls, "-scroll_top");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: prefixClsScrollTop,
    style: scrollTopConfig instanceof Object ? scrollTopConfig : undefined,
    onClick: handleClick
  });
};
var _default = exports.default = (0, _mobxReactLite.observer)(ScrollTop);
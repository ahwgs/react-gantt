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
var _store = require("../../store");
require("./index.css");
var Today = function Today() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var isRTL = store.isRTL;
  var halfDayWidth = _store.ONE_DAY_MS / store.pxUnitAmp / 2;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-today"),
    style: {
      transform: "translate(".concat(store.todayTranslateX + halfDayWidth, "px)"),
      left: 0
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-today_line"),
    style: {
      height: store.bodyScrollHeight
    }
  }));
};
var _default = exports.default = (0, _mobxReactLite.observer)(Today);
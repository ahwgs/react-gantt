"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./RowToggler.css");
var RowToggler = function RowToggler(_ref) {
  var onClick = _ref.onClick,
    collapsed = _ref.collapsed,
    level = _ref.level,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? '' : _ref$prefixCls;
  var prefixClsRowToggler = "".concat(prefixCls, "-row-toggler");
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "none",
    onClick: onClick,
    className: prefixClsRowToggler
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(prefixClsRowToggler, (0, _defineProperty2.default)({}, "".concat(prefixClsRowToggler, "-collapsed"), collapsed))
  }, /*#__PURE__*/_react.default.createElement("i", {
    "data-level": level
  }, level <= 0 ? /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z"
  })) : /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z"
  })))));
};
var _default = exports.default = RowToggler;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _mobxReactLite = require("mobx-react-lite");
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("../../utils");
var _context = _interopRequireDefault(require("../../context"));
require("./index.css");
var height = 8;
var GroupBar = function GroupBar(_ref) {
  var data = _ref.data;
  var _useContext = (0, _react.useContext)(_context.default),
    prefixCls = _useContext.prefixCls,
    renderGroupBar = _useContext.renderGroupBar;
  var translateY = data.translateY;
  var _getMaxRange = (0, _utils.getMaxRange)(data),
    translateX = _getMaxRange.translateX,
    width = _getMaxRange.width;
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "none",
    className: (0, _classnames.default)("".concat(prefixCls, "-group-bar")),
    style: {
      transform: "translate(".concat(translateX, "px, ").concat(translateY, "px)")
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-bar")
  }, renderGroupBar ? renderGroupBar(data, {
    width: width,
    height: height
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: width + 1,
    height: height + 8,
    viewBox: "0 0 ".concat(width + 1, " ").concat(height + 8)
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: data.record.background || '#7B809E',
    d: "\n              M".concat(width - 2, ",0.5\n              l-").concat(width - 4, ",0\n              c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934\n              c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066\n              l0,13.65\n              l6,-7\n              l").concat(width - 12, ",0\n              l6,7\n              l0,-13.65\n              c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045\n              c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z\n            ")
  })))));
};
var _default = exports.default = (0, _mobxReactLite.observer)(GroupBar);
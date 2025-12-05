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
var _Dependence = _interopRequireDefault(require("./Dependence"));
var Dependencies = function Dependencies() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store;
  var dependencies = store.dependencies;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, dependencies.map(function (dependence) {
    return /*#__PURE__*/_react.default.createElement(_Dependence.default, {
      key: JSON.stringify(dependence),
      data: dependence
    });
  }));
};
var _default = exports.default = (0, _mobxReactLite.observer)(Dependencies);
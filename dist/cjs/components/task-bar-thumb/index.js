"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _mobxReactLite = require("mobx-react-lite");
var _classnames = _interopRequireDefault(require("classnames"));
var _context = _interopRequireDefault(require("../../context"));
require("./index.css");
var TaskBarThumb = function TaskBarThumb(_ref) {
  var data = _ref.data;
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    renderBarThumb = _useContext.renderBarThumb,
    prefixCls = _useContext.prefixCls,
    getBarColor = _useContext.getBarColor;
  var prefixClsTaskBarThumb = "".concat(prefixCls, "-task-bar-thumb");
  var viewTranslateX = store.translateX,
    viewWidth = store.viewWidth;
  var translateX = data.translateX,
    translateY = data.translateY,
    label = data.label,
    record = data.record;
  var type = (0, _react.useMemo)(function () {
    var rightSide = viewTranslateX + viewWidth;
    return translateX - rightSide > 0 ? 'right' : 'left';
  }, [translateX, viewTranslateX, viewWidth]);
  var left = (0, _react.useMemo)(function () {
    return type === 'right' ? viewTranslateX + viewWidth - 5 : viewTranslateX + 2;
  }, [type, viewTranslateX, viewWidth]);
  var handleClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    store.scrollToBar(data, type);
  }, [data, store, type]);
  var getBackgroundColor = (0, _react.useMemo)(function () {
    return record.backgroundColor || getBarColor && getBarColor(record).backgroundColor;
  }, [record]);
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "none",
    className: (0, _classnames.default)(prefixClsTaskBarThumb, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixClsTaskBarThumb, "-left"), type === 'left'), "".concat(prefixClsTaskBarThumb, "-right"), type === 'right')),
    style: {
      left: left,
      top: translateY - 5
    },
    onClick: handleClick
  }, type === 'left' && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsTaskBarThumb, "-circle-left"),
    style: {
      backgroundColor: getBackgroundColor
    }
  }), renderBarThumb ? renderBarThumb(data.record, type) : label, type === 'right' && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsTaskBarThumb, "-circle-right"),
    style: {
      backgroundColor: getBackgroundColor
    }
  }));
};
var _default = exports.default = (0, _mobxReactLite.observer)(TaskBarThumb);
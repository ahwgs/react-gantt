"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classnames = _interopRequireDefault(require("classnames"));
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("../../context"));
var _useDragResize3 = _interopRequireDefault(require("../../hooks/useDragResize"));
require("./index.css");
var Divider = function Divider() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    tableCollapseAble = _useContext.tableCollapseAble,
    prefixCls = _useContext.prefixCls;
  var prefixClsDivider = "".concat(prefixCls, "-divider");
  var tableWidth = store.tableWidth;
  var handleClick = (0, _react.useCallback)(function (event) {
    event.stopPropagation();
    store.toggleCollapse();
  }, [store]);
  var left = tableWidth;
  var handleResize = (0, _react.useCallback)(function (_ref) {
    var width = _ref.width;
    store.handleResizeTableWidth(width);
  }, [store]);
  var _useDragResize = (0, _useDragResize3.default)(handleResize, {
      initSize: {
        width: tableWidth
      },
      minWidth: 200,
      maxWidth: store.width * 0.6,
      direction: store.isRTL ? -1 : 1
    }),
    _useDragResize2 = (0, _slicedToArray2.default)(_useDragResize, 2),
    handleMouseDown = _useDragResize2[0],
    resizing = _useDragResize2[1];
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "none",
    className: (0, _classnames.default)(prefixClsDivider, (0, _defineProperty2.default)({}, "".concat(prefixClsDivider, "_only"), !tableCollapseAble)),
    style: (0, _defineProperty2.default)({}, store.isRTL ? 'right' : 'left', left - 1),
    onMouseDown: tableWidth === 0 ? undefined : handleMouseDown
  }, resizing && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 9999,
      cursor: 'col-resize'
    }
  }), /*#__PURE__*/_react.default.createElement("hr", null), tableCollapseAble && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsDivider, "-icon-wrapper"),
    role: "none",
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: (0, _classnames.default)("".concat(prefixClsDivider, "-arrow"), (0, _defineProperty2.default)({}, "".concat(prefixClsDivider, "-reverse"), store.isRTL ? left > 0 : left <= 0))
  })));
};
var _default = exports.default = (0, _mobxReactLite.observer)(Divider);
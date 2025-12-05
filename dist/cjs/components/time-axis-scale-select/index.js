"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _ahooks = require("ahooks");
var _classnames = _interopRequireDefault(require("classnames"));
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("../../context"));
require("./index.css");
var TimeAxisScaleSelect = function TimeAxisScaleSelect() {
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var sightConfig = store.sightConfig,
    scrolling = store.scrolling,
    viewTypeList = store.viewTypeList;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var ref = (0, _react.useRef)(null);
  (0, _ahooks.useClickAway)(function () {
    setVisible(false);
  }, ref);
  var handleClick = (0, _react.useCallback)(function () {
    setVisible(true);
  }, []);
  var handleSelect = (0, _react.useCallback)(function (item) {
    store.switchSight(item.type);
    setVisible(false);
  }, [store]);
  var selected = sightConfig.type;
  var isSelected = (0, _react.useCallback)(function (key) {
    return key === selected;
  }, [selected]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-time-axis-scale-select"),
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("div", {
    role: "none",
    className: "".concat(prefixCls, "-trigger"),
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-text")
  }, sightConfig.label), /*#__PURE__*/_react.default.createElement("span", {
    className: "dropdown-icon"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    id: "at-triangle-down-s",
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-shadow"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-scrolling"), scrolling))
  }), visible && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('next-overlay-wrapper', 'opened')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('next-overlay-inner'),
    "aria-hidden": "false",
    style: {
      position: 'absolute',
      right: 15,
      top: 60
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "next-loading-wrap"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    role: "listbox",
    className: (0, _classnames.default)('next-menu'),
    "aria-multiselectable": "false"
  }, viewTypeList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: item.type,
      role: "none",
      onClick: function onClick() {
        handleSelect(item);
      },
      className: (0, _classnames.default)('next-menu-item', {
        'next-selected': isSelected(item.type)
      })
    }, isSelected(item.type) && /*#__PURE__*/_react.default.createElement("i", {
      className: "".concat(prefixCls, "-selected_icon")
    }, /*#__PURE__*/_react.default.createElement("svg", {
      viewBox: "0 0 1024 1024"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M413.7472 768a29.5936 29.5936 0 0 1-21.6576-9.472l-229.5296-241.152a33.3824 33.3824 0 0 1 0-45.5168 29.696 29.696 0 0 1 43.4176 0l207.7696 218.368 404.2752-424.7552a29.5936 29.5936 0 0 1 43.4176 0 33.3824 33.3824 0 0 1 0 45.568l-425.984 447.488A29.5936 29.5936 0 0 1 413.696 768"
    }))), /*#__PURE__*/_react.default.createElement("span", {
      className: "next-menu-item-text",
      "aria-selected": "true"
    }, item.label));
  }))))));
};
var _default = exports.default = (0, _mobxReactLite.observer)(TimeAxisScaleSelect);
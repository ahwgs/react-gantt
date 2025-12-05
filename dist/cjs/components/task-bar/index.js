"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _usePersistFn = require("../../utils/usePersistFn");
var _classnames = _interopRequireDefault(require("classnames"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _constants = require("../../constants");
var _context = _interopRequireDefault(require("../../context"));
var _store = require("../../store");
var _dragResize = _interopRequireDefault(require("../drag-resize"));
require("./index.css");
var TaskBar = function TaskBar(_ref) {
  var data = _ref.data;
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    getBarColor = _useContext.getBarColor,
    renderBar = _useContext.renderBar,
    onBarClick = _useContext.onBarClick,
    prefixCls = _useContext.prefixCls,
    barHeight = _useContext.barHeight,
    alwaysShowTaskBar = _useContext.alwaysShowTaskBar,
    renderLeftText = _useContext.renderLeftText,
    renderRightText = _useContext.renderRightText;
  var width = data.width,
    translateX = data.translateX,
    translateY = data.translateY,
    invalidDateRange = data.invalidDateRange,
    stepGesture = data.stepGesture,
    dateTextFormat = data.dateTextFormat,
    record = data.record,
    loading = data.loading,
    getDateWidth = data.getDateWidth;
  var _ref2 = record || {},
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled;
  var prefixClsTaskBar = "".concat(prefixCls, "-task-bar");
  var selectionIndicatorTop = store.selectionIndicatorTop,
    showSelectionIndicator = store.showSelectionIndicator,
    rowHeight = store.rowHeight,
    locale = store.locale;
  var showDragBar = (0, _react.useMemo)(function () {
    if (!showSelectionIndicator) return false;
    // 差值
    var baseTop = _constants.TOP_PADDING + rowHeight / 2 - barHeight / 2;
    return selectionIndicatorTop === translateY - baseTop;
  }, [showSelectionIndicator, selectionIndicatorTop, translateY, rowHeight, barHeight]);
  var themeColor = (0, _react.useMemo)(function () {
    if (translateX + width >= (0, _dayjs.default)().valueOf() / store.pxUnitAmp) return ['#95DDFF', '#64C7FE'];
    return ['#FD998F', '#F96B5D'];
  }, [store.pxUnitAmp, translateX, width]);
  var handleBeforeResize = function handleBeforeResize(type) {
    return function () {
      if (disabled) return;
      store.handleDragStart(data, type);
    };
  };
  var handleResize = (0, _react.useCallback)(function (_ref3) {
    var newWidth = _ref3.width,
      x = _ref3.x;
    if (disabled) return;
    store.updateBarSize(data, {
      width: newWidth,
      x: x
    });
  }, [data, store, disabled]);
  var handleLeftResizeEnd = (0, _react.useCallback)(function (oldSize) {
    store.handleDragEnd();
    store.updateTaskDate(data, oldSize, 'left');
  }, [data, store]);
  var handleRightResizeEnd = (0, _react.useCallback)(function (oldSize) {
    store.handleDragEnd();
    store.updateTaskDate(data, oldSize, 'right');
  }, [data, store]);
  var handleMoveEnd = (0, _react.useCallback)(function (oldSize) {
    store.handleDragEnd();
    store.updateTaskDate(data, oldSize, 'move');
  }, [data, store]);
  var handleAutoScroll = (0, _react.useCallback)(function (delta) {
    store.setTranslateX(store.translateX + delta);
  }, [store]);
  var allowDrag = showDragBar && !loading && !disabled;
  var handleClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    if (onBarClick) onBarClick(data.record);
  }, [data.record, onBarClick]);
  var reachEdge = (0, _usePersistFn.usePersistFn)(function (position) {
    return position === 'left' && store.translateX <= 0;
  });
  // 根据不同的视图确定拖动时的单位，在任何视图下都以一天为单位
  var grid = (0, _react.useMemo)(function () {
    return _store.ONE_DAY_MS / store.pxUnitAmp;
  }, [store.pxUnitAmp]);
  var moveCalc = -(width / store.pxUnitAmp);
  var days = (0, _react.useMemo)(function () {
    var daysWidth = Number(getDateWidth(translateX + width + moveCalc, translateX));
    return "".concat(daysWidth, " ").concat(daysWidth > 1 ? locale.days : locale.day);
  }, [translateX, width, moveCalc, translateX]);
  var backgroundColor = record.backgroundColor || getBarColor && getBarColor(record).backgroundColor || themeColor[0];
  var borderColor = record.borderColor || getBarColor && getBarColor(record).borderColor || themeColor[1];
  var isGradient = backgroundColor && (backgroundColor.includes('gradient') || backgroundColor.includes('url'));
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "none",
    className: (0, _classnames.default)(prefixClsTaskBar, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixClsTaskBar, "-invalid-date-range"), invalidDateRange), "".concat(prefixClsTaskBar, "-overdue"), !invalidDateRange)),
    style: {
      transform: "translate(".concat(translateX, "px, ").concat(translateY, "px)")
    },
    onClick: handleClick
  }, loading && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsTaskBar, "-loading")
  }), /*#__PURE__*/_react.default.createElement("div", null, allowDrag && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_dragResize.default, {
    className: (0, _classnames.default)("".concat(prefixClsTaskBar, "-resize-handle"), "".concat(prefixClsTaskBar, "-resize-handle-left"), (0, _defineProperty2.default)({}, "".concat(prefixClsTaskBar, "-resize-handle-disabled"), disabled)),
    style: {
      left: -14
    },
    onResize: handleResize,
    onResizeEnd: handleLeftResizeEnd,
    defaultSize: {
      x: translateX,
      width: width
    },
    minWidth: 30,
    grid: grid,
    type: "left",
    scroller: store.chartElementRef.current || undefined,
    onAutoScroll: handleAutoScroll,
    reachEdge: reachEdge,
    onBeforeResize: handleBeforeResize('left'),
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement(_dragResize.default, {
    className: (0, _classnames.default)("".concat(prefixClsTaskBar, "-resize-handle"), "".concat(prefixClsTaskBar, "-resize-handle-right"), (0, _defineProperty2.default)({}, "".concat(prefixClsTaskBar, "-resize-handle-disabled"), disabled)),
    style: {
      left: width + 1
    },
    onResize: handleResize,
    onResizeEnd: handleRightResizeEnd,
    defaultSize: {
      x: translateX,
      width: width
    },
    minWidth: 30,
    grid: grid,
    type: "right",
    scroller: store.chartElementRef.current || undefined,
    onAutoScroll: handleAutoScroll,
    reachEdge: reachEdge,
    onBeforeResize: handleBeforeResize('right'),
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(prefixClsTaskBar, "-resize-bg"), "".concat(prefixClsTaskBar, "-resize-bg-compact")),
    style: {
      width: width + 30,
      left: -14
    }
  })), /*#__PURE__*/_react.default.createElement(_dragResize.default, {
    className: "".concat(prefixClsTaskBar, "-bar"),
    onResize: handleResize,
    onResizeEnd: handleMoveEnd,
    defaultSize: {
      x: translateX,
      width: width
    },
    minWidth: 30,
    grid: grid,
    type: "move",
    scroller: store.chartElementRef.current || undefined,
    onAutoScroll: handleAutoScroll,
    reachEdge: reachEdge,
    onBeforeResize: handleBeforeResize('move')
  }, renderBar ? renderBar(data, {
    width: width + 1,
    height: barHeight + 1
  }) : isGradient ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: width + 1,
      height: barHeight + 1,
      background: backgroundColor,
      border: "1px solid ".concat(borderColor),
      borderRadius: 4,
      boxSizing: 'border-box'
    }
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: width + 1,
    height: barHeight + 1,
    viewBox: "0 0 ".concat(width + 1, " ").concat(barHeight + 1)
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: backgroundColor,
    stroke: borderColor,
    d: "\n              M".concat(width - 2, ",0.5\n              l-").concat(width - 5, ",0\n              c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934\n              c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066\n              l0,5.3\n\n              c0.03256,0.38255 0.20896,0.724 0.47457,0.97045\n              c0.26763,0.24834 0.62607,0.40013 1.01995,0.40013\n              l4,0\n\n              l").concat(width - 12, ",0\n\n              l4,0\n              c0.41421,0 0.78921,-0.16789 1.06066,-0.43934\n              c0.27145,-0.27145 0.43934,-0.64645 0.43934,-1.06066\n\n              l0,-5.3\n              c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045\n              c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z\n            ")
  })))), (allowDrag || disabled || alwaysShowTaskBar) && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsTaskBar, "-label"),
    style: {
      left: width / 2 - 10
    }
  }, days), (stepGesture === 'moving' || allowDrag || alwaysShowTaskBar) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsTaskBar, "-date-text"),
    style: {
      left: width + 16
    }
  }, renderRightText ? renderRightText(data) : dateTextFormat(translateX + width + moveCalc)), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixClsTaskBar, "-date-text"),
    style: {
      right: width + 16
    }
  }, renderLeftText ? renderLeftText(data) : dateTextFormat(translateX))));
};
var _default = exports.default = (0, _mobxReactLite.observer)(TaskBar);
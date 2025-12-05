import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { usePersistFn } from "../../utils/usePersistFn";
import classNames from 'classnames';
import dayjs from 'dayjs';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext, useMemo } from 'react';
import { TOP_PADDING } from "../../constants";
import Context from "../../context";
import { ONE_DAY_MS } from "../../store";
import DragResize from "../drag-resize";
import "./index.css";
var TaskBar = function TaskBar(_ref) {
  var data = _ref.data;
  var _useContext = useContext(Context),
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
  var showDragBar = useMemo(function () {
    if (!showSelectionIndicator) return false;
    // 差值
    var baseTop = TOP_PADDING + rowHeight / 2 - barHeight / 2;
    return selectionIndicatorTop === translateY - baseTop;
  }, [showSelectionIndicator, selectionIndicatorTop, translateY, rowHeight, barHeight]);
  var themeColor = useMemo(function () {
    if (translateX + width >= dayjs().valueOf() / store.pxUnitAmp) return ['#95DDFF', '#64C7FE'];
    return ['#FD998F', '#F96B5D'];
  }, [store.pxUnitAmp, translateX, width]);
  var handleBeforeResize = function handleBeforeResize(type) {
    return function () {
      if (disabled) return;
      store.handleDragStart(data, type);
    };
  };
  var handleResize = useCallback(function (_ref3) {
    var newWidth = _ref3.width,
      x = _ref3.x;
    if (disabled) return;
    store.updateBarSize(data, {
      width: newWidth,
      x: x
    });
  }, [data, store, disabled]);
  var handleLeftResizeEnd = useCallback(function (oldSize) {
    store.handleDragEnd();
    store.updateTaskDate(data, oldSize, 'left');
  }, [data, store]);
  var handleRightResizeEnd = useCallback(function (oldSize) {
    store.handleDragEnd();
    store.updateTaskDate(data, oldSize, 'right');
  }, [data, store]);
  var handleMoveEnd = useCallback(function (oldSize) {
    store.handleDragEnd();
    store.updateTaskDate(data, oldSize, 'move');
  }, [data, store]);
  var handleAutoScroll = useCallback(function (delta) {
    store.setTranslateX(store.translateX + delta);
  }, [store]);
  var allowDrag = showDragBar && !loading && !disabled;
  var handleClick = useCallback(function (e) {
    e.stopPropagation();
    if (onBarClick) onBarClick(data.record);
  }, [data.record, onBarClick]);
  var reachEdge = usePersistFn(function (position) {
    return position === 'left' && store.translateX <= 0;
  });
  // 根据不同的视图确定拖动时的单位，在任何视图下都以一天为单位
  var grid = useMemo(function () {
    return ONE_DAY_MS / store.pxUnitAmp;
  }, [store.pxUnitAmp]);
  var moveCalc = -(width / store.pxUnitAmp);
  var days = useMemo(function () {
    var daysWidth = Number(getDateWidth(translateX + width + moveCalc, translateX));
    return "".concat(daysWidth, " ").concat(daysWidth > 1 ? locale.days : locale.day);
  }, [translateX, width, moveCalc, translateX]);
  var backgroundColor = record.backgroundColor || getBarColor && getBarColor(record).backgroundColor || themeColor[0];
  var borderColor = record.borderColor || getBarColor && getBarColor(record).borderColor || themeColor[1];
  var isGradient = backgroundColor && (backgroundColor.includes('gradient') || backgroundColor.includes('url'));
  return /*#__PURE__*/React.createElement("div", {
    role: "none",
    className: classNames(prefixClsTaskBar, _defineProperty(_defineProperty({}, "".concat(prefixClsTaskBar, "-invalid-date-range"), invalidDateRange), "".concat(prefixClsTaskBar, "-overdue"), !invalidDateRange)),
    style: {
      transform: "translate(".concat(translateX, "px, ").concat(translateY, "px)")
    },
    onClick: handleClick
  }, loading && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsTaskBar, "-loading")
  }), /*#__PURE__*/React.createElement("div", null, allowDrag && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DragResize, {
    className: classNames("".concat(prefixClsTaskBar, "-resize-handle"), "".concat(prefixClsTaskBar, "-resize-handle-left"), _defineProperty({}, "".concat(prefixClsTaskBar, "-resize-handle-disabled"), disabled)),
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
  }), /*#__PURE__*/React.createElement(DragResize, {
    className: classNames("".concat(prefixClsTaskBar, "-resize-handle"), "".concat(prefixClsTaskBar, "-resize-handle-right"), _defineProperty({}, "".concat(prefixClsTaskBar, "-resize-handle-disabled"), disabled)),
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
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixClsTaskBar, "-resize-bg"), "".concat(prefixClsTaskBar, "-resize-bg-compact")),
    style: {
      width: width + 30,
      left: -14
    }
  })), /*#__PURE__*/React.createElement(DragResize, {
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
  }) : isGradient ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: width + 1,
      height: barHeight + 1,
      background: backgroundColor,
      border: "1px solid ".concat(borderColor),
      borderRadius: 4,
      boxSizing: 'border-box'
    }
  }) : /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: width + 1,
    height: barHeight + 1,
    viewBox: "0 0 ".concat(width + 1, " ").concat(barHeight + 1)
  }, /*#__PURE__*/React.createElement("path", {
    fill: backgroundColor,
    stroke: borderColor,
    d: "\n              M".concat(width - 2, ",0.5\n              l-").concat(width - 5, ",0\n              c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934\n              c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066\n              l0,5.3\n\n              c0.03256,0.38255 0.20896,0.724 0.47457,0.97045\n              c0.26763,0.24834 0.62607,0.40013 1.01995,0.40013\n              l4,0\n\n              l").concat(width - 12, ",0\n\n              l4,0\n              c0.41421,0 0.78921,-0.16789 1.06066,-0.43934\n              c0.27145,-0.27145 0.43934,-0.64645 0.43934,-1.06066\n\n              l0,-5.3\n              c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045\n              c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z\n            ")
  })))), (allowDrag || disabled || alwaysShowTaskBar) && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsTaskBar, "-label"),
    style: {
      left: width / 2 - 10
    }
  }, days), (stepGesture === 'moving' || allowDrag || alwaysShowTaskBar) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsTaskBar, "-date-text"),
    style: {
      left: width + 16
    }
  }, renderRightText ? renderRightText(data) : dateTextFormat(translateX + width + moveCalc)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsTaskBar, "-date-text"),
    style: {
      right: width + 16
    }
  }, renderLeftText ? renderLeftText(data) : dateTextFormat(translateX))));
};
export default observer(TaskBar);
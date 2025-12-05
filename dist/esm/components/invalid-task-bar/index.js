import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useContext, useCallback, useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { usePersistFn } from "../../utils/usePersistFn";
import Context from "../../context";
import DragResize from "../drag-resize";
import "./index.css";
var barH = 8;
var startX = 0;
var renderInvalidBarDefault = function renderInvalidBarDefault(element) {
  return element;
};
var InvalidTaskBar = function InvalidTaskBar(_ref) {
  var data = _ref.data;
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls,
    _useContext$renderInv = _useContext.renderInvalidBar,
    renderInvalidBar = _useContext$renderInv === void 0 ? renderInvalidBarDefault : _useContext$renderInv;
  var triggerRef = useRef(null);
  var translateY = data.translateY,
    translateX = data.translateX,
    width = data.width,
    dateTextFormat = data.dateTextFormat,
    record = data.record;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _ref2 = record || {},
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled;
  var viewTranslateX = store.translateX,
    rowHeight = store.rowHeight;
  var top = translateY;
  var prefixClsInvalidTaskBar = "".concat(prefixCls, "-invalid-task-bar");
  var handleMouseEnter = useCallback(function () {
    var _triggerRef$current;
    if (data.stepGesture === 'moving') return;
    startX = ((_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || (_triggerRef$current = _triggerRef$current.getBoundingClientRect()) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.left) || 0;
    setVisible(true);
  }, [data.stepGesture]);
  var handleMouseLeave = useCallback(function () {
    if (data.stepGesture === 'moving') return;
    setVisible(false);
    store.handleInvalidBarLeave();
  }, [data.stepGesture, store]);
  var handleMouseMove = useCallback(function (event) {
    if (data.stepGesture === 'moving') return;
    var pointerX = viewTranslateX + (event.clientX - startX);
    // eslint-disable-next-line no-shadow
    var _store$startXRectBar = store.startXRectBar(pointerX),
      left = _store$startXRectBar.left,
      width = _store$startXRectBar.width;
    store.handleInvalidBarHover(data, left, Math.ceil(width));
  }, [data, store, viewTranslateX]);
  var handleBeforeResize = function handleBeforeResize() {
    store.handleInvalidBarDragStart(data);
  };
  var handleResize = useCallback(function (_ref3) {
    var newWidth = _ref3.width,
      x = _ref3.x;
    store.updateBarSize(data, {
      width: newWidth,
      x: x
    });
  }, [data, store]);
  var handleLeftResizeEnd = useCallback(function (oldSize) {
    store.handleInvalidBarDragEnd(data, oldSize);
  }, [data, store]);
  var handleAutoScroll = useCallback(function (delta) {
    store.setTranslateX(store.translateX + delta);
  }, [store]);
  var reachEdge = usePersistFn(function (position) {
    return position === 'left' && store.translateX <= 0;
  });
  if (disabled) return null;
  return /*#__PURE__*/React.createElement(DragResize, {
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onResize: handleResize,
    onResizeEnd: handleLeftResizeEnd,
    defaultSize: {
      x: translateX,
      width: width
    },
    minWidth: 30,
    grid: 30,
    type: "right",
    scroller: store.chartElementRef.current || undefined,
    onAutoScroll: handleAutoScroll,
    reachEdge: reachEdge,
    onBeforeResize: handleBeforeResize,
    clickStart: true
  }, /*#__PURE__*/React.createElement("div", {
    ref: triggerRef,
    className: prefixClsInvalidTaskBar,
    style: {
      left: viewTranslateX,
      height: rowHeight,
      transform: "translateY(".concat(top - (rowHeight - barH) / 2, "px")
    }
  }), visible && renderInvalidBar( /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsInvalidTaskBar, "-block"),
    "aria-haspopup": "true",
    "aria-expanded": "false",
    style: {
      left: translateX,
      width: Math.ceil(width),
      transform: "translateY(".concat(top, "px)"),
      backgroundColor: '#7B90FF',
      borderColor: '#7B90FF'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsInvalidTaskBar, "-date"),
    style: {
      right: Math.ceil(width + 6)
    }
  }, dateTextFormat(translateX)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsInvalidTaskBar, "-date"),
    style: {
      left: Math.ceil(width + 6)
    }
  }, dateTextFormat(translateX + width - width / store.pxUnitAmp))), data));
};
export default observer(InvalidTaskBar);
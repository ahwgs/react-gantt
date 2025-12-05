import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { usePersistFn } from "../../utils/usePersistFn";
import { observer } from 'mobx-react-lite';
import React, { memo, useCallback, useContext, useRef, useState } from 'react';
import Context from "../../context";
import "./index.css";
var ScrollBar = function ScrollBar() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var tableWidth = store.tableWidth,
    viewWidth = store.viewWidth;
  var width = store.scrollBarWidth;
  var prefixClsScrollBar = "".concat(prefixCls, "-scroll_bar");
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    resizing = _useState2[0],
    setResizing = _useState2[1];
  var positionRef = useRef({
    scrollLeft: 0,
    left: 0,
    translateX: 0
  });
  var handleMouseMove = usePersistFn(function (event) {
    var distance = event.clientX - positionRef.current.left;
    // TODO 调整倍率
    store.setTranslateX(distance * (store.viewWidth / store.scrollBarWidth) + positionRef.current.translateX);
  });
  var handleMouseUp = useCallback(function () {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    setResizing(false);
  }, [handleMouseMove]);
  var handleMouseDown = useCallback(function (event) {
    positionRef.current.left = event.clientX;
    positionRef.current.translateX = store.translateX;
    positionRef.current.scrollLeft = store.scrollLeft;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    setResizing(true);
  }, [handleMouseMove, handleMouseUp, store.scrollLeft, store.translateX]);
  return /*#__PURE__*/React.createElement("div", {
    role: "none",
    className: prefixClsScrollBar,
    style: _defineProperty(_defineProperty({}, store.isRTL ? 'right' : 'left', tableWidth), "width", viewWidth),
    onMouseDown: handleMouseDown
  }, resizing && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 9999,
      cursor: 'col-resize'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsScrollBar, "-thumb"),
    style: {
      width: width,
      left: store.scrollLeft
    }
  }));
};
export default /*#__PURE__*/memo(observer(ScrollBar));
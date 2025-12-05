import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { useContext, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import Context from "../../context";
import "./index.css";
var TimeIndicator = function TimeIndicator() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var scrolling = store.scrolling,
    translateX = store.translateX,
    tableWidth = store.tableWidth,
    viewWidth = store.viewWidth,
    todayTranslateX = store.todayTranslateX,
    locale = store.locale;
  var prefixClsTimeIndicator = "".concat(prefixCls, "-time-indicator");
  var type = todayTranslateX < translateX ? 'left' : 'right';
  var left = type === 'left' ? tableWidth : 'unset';
  var right = type === 'right' ? 111 : 'unset';
  var display = useMemo(function () {
    var isOverLeft = todayTranslateX < translateX;
    var isOverRight = todayTranslateX > translateX + viewWidth;
    return isOverLeft || isOverRight ? 'block' : 'none';
  }, [todayTranslateX, translateX, viewWidth]);
  var handleClick = useCallback(function () {
    store.scrollToToday();
  }, [store]);
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick,
    className: classNames(prefixClsTimeIndicator, _defineProperty({}, "".concat(prefixClsTimeIndicator, "-scrolling"), scrolling)),
    type: "button",
    "data-role": "button",
    style: {
      left: left,
      right: right,
      display: display
    }
  }, /*#__PURE__*/React.createElement("span", null, locale.today));
};
export default observer(TimeIndicator);
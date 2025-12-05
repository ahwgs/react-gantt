import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { useCallback, useContext, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import Context from "../../context";
import "./index.css";
var TaskBarThumb = function TaskBarThumb(_ref) {
  var data = _ref.data;
  var _useContext = useContext(Context),
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
  var type = useMemo(function () {
    var rightSide = viewTranslateX + viewWidth;
    return translateX - rightSide > 0 ? 'right' : 'left';
  }, [translateX, viewTranslateX, viewWidth]);
  var left = useMemo(function () {
    return type === 'right' ? viewTranslateX + viewWidth - 5 : viewTranslateX + 2;
  }, [type, viewTranslateX, viewWidth]);
  var handleClick = useCallback(function (e) {
    e.stopPropagation();
    store.scrollToBar(data, type);
  }, [data, store, type]);
  var getBackgroundColor = useMemo(function () {
    return record.backgroundColor || getBarColor && getBarColor(record).backgroundColor;
  }, [record]);
  return /*#__PURE__*/React.createElement("div", {
    role: "none",
    className: classNames(prefixClsTaskBarThumb, _defineProperty(_defineProperty({}, "".concat(prefixClsTaskBarThumb, "-left"), type === 'left'), "".concat(prefixClsTaskBarThumb, "-right"), type === 'right')),
    style: {
      left: left,
      top: translateY - 5
    },
    onClick: handleClick
  }, type === 'left' && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsTaskBarThumb, "-circle-left"),
    style: {
      backgroundColor: getBackgroundColor
    }
  }), renderBarThumb ? renderBarThumb(data.record, type) : label, type === 'right' && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsTaskBarThumb, "-circle-right"),
    style: {
      backgroundColor: getBackgroundColor
    }
  }));
};
export default observer(TaskBarThumb);
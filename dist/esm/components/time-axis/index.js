import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { useCallback, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import DragResize from "../drag-resize";
import Context from "../../context";
import "./index.css";
var TimeAxis = function TimeAxis() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var prefixClsTimeAxis = "".concat(prefixCls, "-time-axis");
  var sightConfig = store.sightConfig,
    isToday = store.isToday;
  var majorList = store.getMajorList();
  var minorList = store.getMinorList();
  var handleResize = useCallback(function (_ref) {
    var x = _ref.x;
    store.handlePanMove(-x);
  }, [store]);
  var handleLeftResizeEnd = useCallback(function () {
    store.handlePanEnd();
  }, [store]);
  var getIsToday = useCallback(function (item) {
    var key = item.key;
    var type = sightConfig.type;
    return type === 'day' && isToday(key);
  }, [sightConfig, isToday]);
  return /*#__PURE__*/React.createElement(DragResize, {
    onResize: handleResize,
    onResizeEnd: handleLeftResizeEnd,
    defaultSize: {
      x: -store.translateX,
      width: 0
    },
    type: "move"
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixClsTimeAxis,
    style: _defineProperty(_defineProperty({}, store.isRTL ? 'right' : 'left', store.tableWidth), "width", store.viewWidth)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsTimeAxis, "-render-chunk"),
    style: {
      transform: "translateX(-".concat(store.translateX, "px")
    }
  }, majorList.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.key,
      className: "".concat(prefixClsTimeAxis, "-major"),
      style: {
        width: item.width,
        left: item.left
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixClsTimeAxis, "-major-label")
    }, item.label));
  }), minorList.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.key,
      className: classNames("".concat(prefixClsTimeAxis, "-minor")),
      style: {
        width: item.width,
        left: item.left
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: classNames("".concat(prefixClsTimeAxis, "-minor-label"), _defineProperty({}, "".concat(prefixClsTimeAxis, "-today"), getIsToday(item)))
    }, item.label));
  }))));
};
export default observer(TimeAxis);
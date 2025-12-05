import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useClickAway } from 'ahooks';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext, useRef, useState } from 'react';
import Context from "../../context";
import "./index.css";
var TimeAxisScaleSelect = function TimeAxisScaleSelect() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var sightConfig = store.sightConfig,
    scrolling = store.scrolling,
    viewTypeList = store.viewTypeList;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var ref = useRef(null);
  useClickAway(function () {
    setVisible(false);
  }, ref);
  var handleClick = useCallback(function () {
    setVisible(true);
  }, []);
  var handleSelect = useCallback(function (item) {
    store.switchSight(item.type);
    setVisible(false);
  }, [store]);
  var selected = sightConfig.type;
  var isSelected = useCallback(function (key) {
    return key === selected;
  }, [selected]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-time-axis-scale-select"),
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    role: "none",
    className: "".concat(prefixCls, "-trigger"),
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-text")
  }, sightConfig.label), /*#__PURE__*/React.createElement("span", {
    className: "dropdown-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    id: "at-triangle-down-s",
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z"
  })))), /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-shadow"), _defineProperty({}, "".concat(prefixCls, "-scrolling"), scrolling))
  }), visible && /*#__PURE__*/React.createElement("div", {
    className: classNames('next-overlay-wrapper', 'opened')
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('next-overlay-inner'),
    "aria-hidden": "false",
    style: {
      position: 'absolute',
      right: 15,
      top: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "next-loading-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    role: "listbox",
    className: classNames('next-menu'),
    "aria-multiselectable": "false"
  }, viewTypeList.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.type,
      role: "none",
      onClick: function onClick() {
        handleSelect(item);
      },
      className: classNames('next-menu-item', {
        'next-selected': isSelected(item.type)
      })
    }, isSelected(item.type) && /*#__PURE__*/React.createElement("i", {
      className: "".concat(prefixCls, "-selected_icon")
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 1024 1024"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M413.7472 768a29.5936 29.5936 0 0 1-21.6576-9.472l-229.5296-241.152a33.3824 33.3824 0 0 1 0-45.5168 29.696 29.696 0 0 1 43.4176 0l207.7696 218.368 404.2752-424.7552a29.5936 29.5936 0 0 1 43.4176 0 33.3824 33.3824 0 0 1 0 45.568l-425.984 447.488A29.5936 29.5936 0 0 1 413.696 768"
    }))), /*#__PURE__*/React.createElement("span", {
      className: "next-menu-item-text",
      "aria-selected": "true"
    }, item.label));
  }))))));
};
export default observer(TimeAxisScaleSelect);
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useSize } from 'ahooks';
import React, { useContext, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import "./Gantt.css";
import Chart from "./components/chart";
import Divider from "./components/divider";
import ScrollBar from "./components/scroll-bar";
import ScrollTop from "./components/scroll-top";
import SelectionIndicator from "./components/selection-indicator";
import TableBody from "./components/table-body";
import TableHeader from "./components/table-header";
import TimeAxis from "./components/time-axis";
import TimeAxisScaleSelect from "./components/time-axis-scale-select";
import TimeIndicator from "./components/time-indicator";
import { BAR_HEIGHT, ROW_HEIGHT, TABLE_INDENT } from "./constants";
import Context from "./context";
import { zhCN } from "./locales";
import GanttStore from "./store";
import 'dayjs/locale/ar-sa';
var prefixCls = 'gantt';
var Body = function Body(_ref) {
  var children = _ref.children;
  var _useContext = useContext(Context),
    store = _useContext.store;
  var reference = useRef(null);
  var size = useSize(reference);
  useEffect(function () {
    store.syncSize(size);
  }, [size, store]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-body ").concat(store.isRTL ? "".concat(prefixCls, "-rtl") : ''),
    ref: reference,
    style: {
      direction: store.isRTL ? 'rtl' : 'ltr'
    }
  }, children);
};
export var defaultLocale = _objectSpread({}, zhCN);
var GanttComponent = function GanttComponent(props) {
  var data = props.data,
    columns = props.columns,
    _props$dependencies = props.dependencies,
    dependencies = _props$dependencies === void 0 ? [] : _props$dependencies,
    onUpdate = props.onUpdate,
    _props$startDateKey = props.startDateKey,
    startDateKey = _props$startDateKey === void 0 ? 'startDate' : _props$startDateKey,
    _props$endDateKey = props.endDateKey,
    endDateKey = _props$endDateKey === void 0 ? 'endDate' : _props$endDateKey,
    isRestDay = props.isRestDay,
    getBarColor = props.getBarColor,
    _props$showBackToday = props.showBackToday,
    showBackToday = _props$showBackToday === void 0 ? true : _props$showBackToday,
    _props$showUnitSwitch = props.showUnitSwitch,
    showUnitSwitch = _props$showUnitSwitch === void 0 ? true : _props$showUnitSwitch,
    unit = props.unit,
    onRow = props.onRow,
    _props$tableIndent = props.tableIndent,
    tableIndent = _props$tableIndent === void 0 ? TABLE_INDENT : _props$tableIndent,
    expandIcon = props.expandIcon,
    renderBar = props.renderBar,
    renderInvalidBar = props.renderInvalidBar,
    renderGroupBar = props.renderGroupBar,
    onBarClick = props.onBarClick,
    _props$tableCollapseA = props.tableCollapseAble,
    tableCollapseAble = _props$tableCollapseA === void 0 ? true : _props$tableCollapseA,
    renderBarThumb = props.renderBarThumb,
    _props$scrollTop = props.scrollTop,
    scrollTop = _props$scrollTop === void 0 ? true : _props$scrollTop,
    _props$rowHeight = props.rowHeight,
    rowHeight = _props$rowHeight === void 0 ? ROW_HEIGHT : _props$rowHeight,
    columnsWidth = props.columnsWidth,
    innerRef = props.innerRef,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$alwaysShowTask = props.alwaysShowTaskBar,
    alwaysShowTaskBar = _props$alwaysShowTask === void 0 ? true : _props$alwaysShowTask,
    renderLeftText = props.renderLeftText,
    renderRightText = props.renderRightText,
    onExpand = props.onExpand,
    _props$customSights = props.customSights,
    customSights = _props$customSights === void 0 ? [] : _props$customSights,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? _objectSpread({}, defaultLocale) : _props$locale,
    _props$hideTable = props.hideTable,
    hideTable = _props$hideTable === void 0 ? false : _props$hideTable,
    _props$isRTL = props.isRTL,
    isRTL = _props$isRTL === void 0 ? false : _props$isRTL,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading;

  // Set dayjs locale if locale matches ar-sa structure
  // This is a bit implicit, but helpful
  if (locale.today === 'اليوم') {
    // assuming 'dayjs' is imported as 'dayjs'
    require('dayjs').locale('ar-sa');
  }
  var store = useMemo(function () {
    return new GanttStore({
      rowHeight: rowHeight,
      disabled: disabled,
      customSights: customSights,
      locale: locale,
      columnsWidth: columnsWidth,
      isRTL: isRTL
    });
  }, [rowHeight]);
  useEffect(function () {
    store.setData(data, startDateKey, endDateKey);
  }, [data, endDateKey, startDateKey, store]);
  useEffect(function () {
    store.setColumns(columns);
  }, [columns, store]);
  useEffect(function () {
    store.setOnUpdate(onUpdate);
  }, [onUpdate, store]);
  useEffect(function () {
    store.setDependencies(dependencies);
  }, [dependencies, store]);
  useEffect(function () {
    store.setHideTable(hideTable);
  }, [hideTable]);
  useEffect(function () {
    if (isRestDay) store.setIsRestDay(isRestDay);
  }, [isRestDay, store]);
  useEffect(function () {
    if (unit) store.switchSight(unit);
  }, [unit, store]);
  useImperativeHandle(innerRef, function () {
    return {
      backToday: function backToday() {
        return store.scrollToToday();
      },
      getWidthByDate: store.getWidthByDate
    };
  });
  var ContextValue = React.useMemo(function () {
    return {
      prefixCls: prefixCls,
      store: store,
      getBarColor: getBarColor,
      showBackToday: showBackToday,
      showUnitSwitch: showUnitSwitch,
      onRow: onRow,
      tableIndent: tableIndent,
      expandIcon: expandIcon,
      renderBar: renderBar,
      renderInvalidBar: renderInvalidBar,
      renderGroupBar: renderGroupBar,
      onBarClick: onBarClick,
      tableCollapseAble: tableCollapseAble,
      renderBarThumb: renderBarThumb,
      scrollTop: scrollTop,
      barHeight: BAR_HEIGHT,
      alwaysShowTaskBar: alwaysShowTaskBar,
      renderLeftText: renderLeftText,
      renderRightText: renderRightText,
      onExpand: onExpand,
      hideTable: hideTable,
      isRTL: isRTL,
      loading: loading
    };
  }, [store, getBarColor, showBackToday, showUnitSwitch, onRow, tableIndent, expandIcon, renderBar, renderInvalidBar, renderGroupBar, onBarClick, tableCollapseAble, renderBarThumb, scrollTop, alwaysShowTaskBar, renderLeftText, renderRightText, onExpand, hideTable]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: ContextValue
  }, /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("header", null, !hideTable && /*#__PURE__*/React.createElement(TableHeader, null), /*#__PURE__*/React.createElement(TimeAxis, null)), /*#__PURE__*/React.createElement("main", {
    ref: store.mainElementRef,
    onScroll: store.handleScroll
  }, /*#__PURE__*/React.createElement(SelectionIndicator, null), !hideTable && /*#__PURE__*/React.createElement(TableBody, null), /*#__PURE__*/React.createElement(Chart, null)), !hideTable && /*#__PURE__*/React.createElement(Divider, null), showBackToday && /*#__PURE__*/React.createElement(TimeIndicator, null), showUnitSwitch && /*#__PURE__*/React.createElement(TimeAxisScaleSelect, null), /*#__PURE__*/React.createElement(ScrollBar, null), scrollTop && /*#__PURE__*/React.createElement(ScrollTop, null)));
};
export default GanttComponent;
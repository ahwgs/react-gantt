"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultLocale = exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _ahooks = require("ahooks");
var _react = _interopRequireWildcard(require("react"));
require("./Gantt.css");
var _chart = _interopRequireDefault(require("./components/chart"));
var _divider = _interopRequireDefault(require("./components/divider"));
var _scrollBar = _interopRequireDefault(require("./components/scroll-bar"));
var _scrollTop = _interopRequireDefault(require("./components/scroll-top"));
var _selectionIndicator = _interopRequireDefault(require("./components/selection-indicator"));
var _tableBody = _interopRequireDefault(require("./components/table-body"));
var _tableHeader = _interopRequireDefault(require("./components/table-header"));
var _timeAxis = _interopRequireDefault(require("./components/time-axis"));
var _timeAxisScaleSelect = _interopRequireDefault(require("./components/time-axis-scale-select"));
var _timeIndicator = _interopRequireDefault(require("./components/time-indicator"));
var _constants = require("./constants");
var _context = _interopRequireDefault(require("./context"));
var _locales = require("./locales");
var _store = _interopRequireDefault(require("./store"));
require("dayjs/locale/ar-sa");
var prefixCls = 'gantt';
var Body = function Body(_ref) {
  var children = _ref.children;
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store;
  var reference = (0, _react.useRef)(null);
  var size = (0, _ahooks.useSize)(reference);
  (0, _react.useEffect)(function () {
    store.syncSize(size);
  }, [size, store]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-body ").concat(store.isRTL ? "".concat(prefixCls, "-rtl") : ''),
    ref: reference,
    style: {
      direction: store.isRTL ? 'rtl' : 'ltr'
    }
  }, children);
};
var defaultLocale = exports.defaultLocale = (0, _objectSpread2.default)({}, _locales.zhCN);
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
    tableIndent = _props$tableIndent === void 0 ? _constants.TABLE_INDENT : _props$tableIndent,
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
    rowHeight = _props$rowHeight === void 0 ? _constants.ROW_HEIGHT : _props$rowHeight,
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
    locale = _props$locale === void 0 ? (0, _objectSpread2.default)({}, defaultLocale) : _props$locale,
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
  var store = (0, _react.useMemo)(function () {
    return new _store.default({
      rowHeight: rowHeight,
      disabled: disabled,
      customSights: customSights,
      locale: locale,
      columnsWidth: columnsWidth,
      isRTL: isRTL
    });
  }, [rowHeight]);
  (0, _react.useEffect)(function () {
    store.setData(data, startDateKey, endDateKey);
  }, [data, endDateKey, startDateKey, store]);
  (0, _react.useEffect)(function () {
    store.setColumns(columns);
  }, [columns, store]);
  (0, _react.useEffect)(function () {
    store.setOnUpdate(onUpdate);
  }, [onUpdate, store]);
  (0, _react.useEffect)(function () {
    store.setDependencies(dependencies);
  }, [dependencies, store]);
  (0, _react.useEffect)(function () {
    store.setHideTable(hideTable);
  }, [hideTable]);
  (0, _react.useEffect)(function () {
    if (isRestDay) store.setIsRestDay(isRestDay);
  }, [isRestDay, store]);
  (0, _react.useEffect)(function () {
    if (unit) store.switchSight(unit);
  }, [unit, store]);
  (0, _react.useImperativeHandle)(innerRef, function () {
    return {
      backToday: function backToday() {
        return store.scrollToToday();
      },
      getWidthByDate: store.getWidthByDate
    };
  });
  var ContextValue = _react.default.useMemo(function () {
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
      barHeight: _constants.BAR_HEIGHT,
      alwaysShowTaskBar: alwaysShowTaskBar,
      renderLeftText: renderLeftText,
      renderRightText: renderRightText,
      onExpand: onExpand,
      hideTable: hideTable,
      isRTL: isRTL,
      loading: loading
    };
  }, [store, getBarColor, showBackToday, showUnitSwitch, onRow, tableIndent, expandIcon, renderBar, renderInvalidBar, renderGroupBar, onBarClick, tableCollapseAble, renderBarThumb, scrollTop, alwaysShowTaskBar, renderLeftText, renderRightText, onExpand, hideTable]);
  return /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
    value: ContextValue
  }, /*#__PURE__*/_react.default.createElement(Body, null, /*#__PURE__*/_react.default.createElement("header", null, !hideTable && /*#__PURE__*/_react.default.createElement(_tableHeader.default, null), /*#__PURE__*/_react.default.createElement(_timeAxis.default, null)), /*#__PURE__*/_react.default.createElement("main", {
    ref: store.mainElementRef,
    onScroll: store.handleScroll
  }, /*#__PURE__*/_react.default.createElement(_selectionIndicator.default, null), !hideTable && /*#__PURE__*/_react.default.createElement(_tableBody.default, null), /*#__PURE__*/_react.default.createElement(_chart.default, null)), !hideTable && /*#__PURE__*/_react.default.createElement(_divider.default, null), showBackToday && /*#__PURE__*/_react.default.createElement(_timeIndicator.default, null), showUnitSwitch && /*#__PURE__*/_react.default.createElement(_timeAxisScaleSelect.default, null), /*#__PURE__*/_react.default.createElement(_scrollBar.default, null), scrollTop && /*#__PURE__*/_react.default.createElement(_scrollTop.default, null)));
};
var _default = exports.default = GanttComponent;
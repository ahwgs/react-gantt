import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _initializerDefineProperty from "@babel/runtime/helpers/esm/initializerDefineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/esm/applyDecoratedDescriptor";
import _initializerWarningHelper from "@babel/runtime/helpers/esm/initializerWarningHelper";
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
import _regeneratorRuntime from "@babel/runtime/regenerator";
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isBetween from 'dayjs/plugin/isBetween';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekday from 'dayjs/plugin/weekday';
import debounce from 'lodash/debounce';
import find from 'lodash/find';
import throttle from 'lodash/throttle';
import { action, computed, makeObservable, observable, runInAction, toJS } from 'mobx';
import { createRef } from 'react';
import { defaultLocale } from "./Gantt";
import { HEADER_HEIGHT, TOP_PADDING } from "./constants";
import { EGanttSightValues } from "./types";
import { flattenDeep, transverseData } from "./utils";
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);
dayjs.extend(advancedFormat);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);
export var ONE_DAY_MS = 86400000;
// 视图日视图、周视图、月视图、季视图、年视图
export var getViewTypeList = function getViewTypeList(locale) {
  return [{
    type: 'day',
    label: locale.day,
    value: EGanttSightValues.day
  }, {
    type: 'week',
    label: locale.week,
    value: EGanttSightValues.week
  }, {
    type: 'month',
    label: locale.month,
    value: EGanttSightValues.month
  }, {
    type: 'quarter',
    label: locale.quarter,
    value: EGanttSightValues.quarter
  }, {
    type: 'halfYear',
    label: locale.halfYear,
    value: EGanttSightValues.halfYear
  }];
};
function isRestDay(date) {
  var calc = [0, 6];
  return calc.includes(dayjs(date).weekday());
}
var GanttStore = (_class = /*#__PURE__*/function () {
  function GanttStore(_ref) {
    var _this = this;
    var rowHeight = _ref.rowHeight,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      customSights = _ref.customSights,
      locale = _ref.locale,
      columnsWidth = _ref.columnsWidth,
      _ref$isRTL = _ref.isRTL,
      isRTL = _ref$isRTL === void 0 ? false : _ref$isRTL;
    _classCallCheck(this, GanttStore);
    _defineProperty(this, "locale", _objectSpread({}, defaultLocale));
    _defineProperty(this, "isRTL", false);
    _defineProperty(this, "_wheelTimer", void 0);
    _defineProperty(this, "scrollTimer", void 0);
    _initializerDefineProperty(this, "data", _descriptor, this);
    _initializerDefineProperty(this, "originData", _descriptor2, this);
    _initializerDefineProperty(this, "columns", _descriptor3, this);
    _initializerDefineProperty(this, "dependencies", _descriptor4, this);
    _initializerDefineProperty(this, "scrolling", _descriptor5, this);
    _initializerDefineProperty(this, "scrollTop", _descriptor6, this);
    _initializerDefineProperty(this, "collapse", _descriptor7, this);
    _initializerDefineProperty(this, "tableWidth", _descriptor8, this);
    _initializerDefineProperty(this, "viewWidth", _descriptor9, this);
    _initializerDefineProperty(this, "width", _descriptor10, this);
    _initializerDefineProperty(this, "height", _descriptor11, this);
    _initializerDefineProperty(this, "bodyWidth", _descriptor12, this);
    _initializerDefineProperty(this, "translateX", _descriptor13, this);
    _initializerDefineProperty(this, "sightConfig", _descriptor14, this);
    _initializerDefineProperty(this, "showSelectionIndicator", _descriptor15, this);
    _initializerDefineProperty(this, "selectionIndicatorTop", _descriptor16, this);
    _initializerDefineProperty(this, "dragging", _descriptor17, this);
    _initializerDefineProperty(this, "draggingType", _descriptor18, this);
    _initializerDefineProperty(this, "disabled", _descriptor19, this);
    _defineProperty(this, "viewTypeList", getViewTypeList(this.locale));
    _defineProperty(this, "gestureKeyPress", false);
    _defineProperty(this, "mainElementRef", /*#__PURE__*/createRef());
    _defineProperty(this, "chartElementRef", /*#__PURE__*/createRef());
    _defineProperty(this, "isPointerPress", false);
    _defineProperty(this, "startDateKey", 'startDate');
    _defineProperty(this, "endDateKey", 'endDate');
    _defineProperty(this, "autoScrollPos", 0);
    _defineProperty(this, "clientX", 0);
    _defineProperty(this, "rowHeight", void 0);
    _defineProperty(this, "onUpdate", function () {
      return Promise.resolve(true);
    });
    _defineProperty(this, "isRestDay", isRestDay);
    _defineProperty(this, "getWidthByDate", function (startDate, endDate) {
      return (endDate.valueOf() - startDate.valueOf()) / _this.pxUnitAmp;
    });
    _defineProperty(this, "startXRectBar", function (startX) {
      var date = dayjs(startX * _this.pxUnitAmp);
      var dayRect = function dayRect() {
        var stAmp = date.startOf('day');
        var endAmp = date.endOf('day');
        // @ts-expect-error
        var left = stAmp / _this.pxUnitAmp;
        // @ts-expect-error
        var width = (endAmp - stAmp) / _this.pxUnitAmp;
        return {
          left: left,
          width: width
        };
      };
      var weekRect = function weekRect() {
        if (date.weekday() === 0) date = date.add(-1, 'week');
        var left = date.weekday(1).startOf('day').valueOf() / _this.pxUnitAmp;
        var width = (7 * 24 * 60 * 60 * 1000 - 1000) / _this.pxUnitAmp;
        return {
          left: left,
          width: width
        };
      };
      var monthRect = function monthRect() {
        var stAmp = date.startOf('month').valueOf();
        var endAmp = date.endOf('month').valueOf();
        var left = stAmp / _this.pxUnitAmp;
        var width = (endAmp - stAmp) / _this.pxUnitAmp;
        return {
          left: left,
          width: width
        };
      };
      var map = {
        day: dayRect,
        week: weekRect,
        month: weekRect,
        quarter: monthRect,
        halfYear: monthRect
      };
      return map[_this.sightConfig.type]();
    });
    _initializerDefineProperty(this, "handleWheel", _descriptor20, this);
    _defineProperty(this, "handleScroll", function (event) {
      var scrollTop = event.currentTarget.scrollTop;
      _this.scrollY(scrollTop);
    });
    _defineProperty(this, "scrollY", throttle(function (scrollTop) {
      _this.scrollTop = scrollTop;
    }, 100));
    _defineProperty(this, "handleMouseMove", debounce(function (event) {
      if (!_this.isPointerPress) _this.showSelectionBar(event);
    }, 5));
    _defineProperty(this, "getHovered", function (top) {
      var baseTop = top - top % _this.rowHeight;
      return _this.selectionIndicatorTop >= baseTop && _this.selectionIndicatorTop <= baseTop + _this.rowHeight;
    });
    makeObservable(this);
    this.width = 1320;
    this.height = 418;
    this.viewTypeList = customSights.length ? customSights : getViewTypeList(locale);
    var sightConfig = customSights.length ? customSights[0] : getViewTypeList(locale)[0];
    var translateX = dayjs(this.getStartDate()).valueOf() / (sightConfig.value * 1000);
    var bodyWidth = this.width;
    var viewWidth = 704;
    var tableWidth = columnsWidth !== null && columnsWidth !== void 0 ? columnsWidth : 500;
    this.viewWidth = viewWidth;
    this.tableWidth = tableWidth;
    this.translateX = translateX;
    this.sightConfig = sightConfig;
    this.bodyWidth = bodyWidth;
    this.rowHeight = rowHeight;
    this.disabled = disabled;
    this.locale = locale;
    this.isRTL = isRTL;
  }
  _createClass(GanttStore, [{
    key: "getStartDate",
    value: function getStartDate() {
      return dayjs().startOf('day').subtract(10, 'day').toString();
    }
  }, {
    key: "setIsRestDay",
    value: function setIsRestDay(function_) {
      this.isRestDay = function_ || isRestDay;
    }
  }, {
    key: "setData",
    value: function setData(data, startDateKey, endDateKey) {
      this.startDateKey = startDateKey;
      this.endDateKey = endDateKey;
      this.originData = data;
      this.data = transverseData(data, startDateKey, endDateKey);
    }
  }, {
    key: "toggleCollapse",
    value: function toggleCollapse() {
      if (this.tableWidth > 0) {
        this.tableWidth = 0;
        this.viewWidth = this.width - this.tableWidth;
      } else {
        this.initWidth();
      }
    }
  }, {
    key: "setRowCollapse",
    value: function setRowCollapse(item, collapsed) {
      item.collapsed = collapsed;
      // this.barList = this.getBarList();
    }
  }, {
    key: "setOnUpdate",
    value: function setOnUpdate(onUpdate) {
      this.onUpdate = onUpdate;
    }
  }, {
    key: "setColumns",
    value: function setColumns(columns) {
      this.columns = columns;
    }
  }, {
    key: "setDependencies",
    value: function setDependencies(dependencies) {
      this.dependencies = dependencies;
    }
  }, {
    key: "setHideTable",
    value: function setHideTable() {
      var isHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (isHidden) {
        this.tableWidth = 0;
        this.viewWidth = this.width - this.tableWidth;
      } else {
        this.initWidth();
      }
    }
  }, {
    key: "handlePanMove",
    value: function handlePanMove(translateX) {
      this.scrolling = true;
      this.setTranslateX(translateX);
    }
  }, {
    key: "handlePanEnd",
    value: function handlePanEnd() {
      this.scrolling = false;
    }
  }, {
    key: "syncSize",
    value: function syncSize(size) {
      if (!size || !size.height || !size.width) return;
      var width = size.width,
        height = size.height;
      if (this.height !== height) this.height = height;
      if (this.width !== width) {
        this.width = width;
        this.initWidth();
      }
    }
  }, {
    key: "handleResizeTableWidth",
    value: function handleResizeTableWidth(width) {
      var columnsWidthArr = this.columns.filter(function (column) {
        return column.width > 0;
      });
      if (this.columns.length === columnsWidthArr.length) return;
      this.tableWidth = width;
      this.viewWidth = this.width - this.tableWidth;
    }
  }, {
    key: "initWidth",
    value: function initWidth() {
      this.tableWidth = this.totalColumnWidth || 250;
      this.viewWidth = this.width - this.tableWidth;
      // 图表宽度不能小于 200
      if (this.viewWidth < 200) {
        this.viewWidth = 200;
        this.tableWidth = this.width - this.viewWidth;
      }
    }
  }, {
    key: "setTranslateX",
    value: function setTranslateX(translateX) {
      this.translateX = Math.max(translateX, 0);
    }
  }, {
    key: "switchSight",
    value: function switchSight(type) {
      var target = find(this.viewTypeList, {
        type: type
      });
      if (target) {
        this.sightConfig = target;
        this.setTranslateX(dayjs(this.getStartDate()).valueOf() / (target.value * 1000));
      }
    }
  }, {
    key: "scrollToToday",
    value: function scrollToToday() {
      var translateX = this.todayTranslateX - this.viewWidth / 2;
      this.setTranslateX(translateX);
    }
  }, {
    key: "getTranslateXByDate",
    value: function getTranslateXByDate(date) {
      return dayjs(date).startOf('day').valueOf() / this.pxUnitAmp;
    }
  }, {
    key: "todayTranslateX",
    get: function get() {
      return dayjs().startOf('day').valueOf() / this.pxUnitAmp;
    }
  }, {
    key: "scrollBarWidth",
    get: function get() {
      var MIN_WIDTH = 30;
      return Math.max(this.viewWidth / this.scrollWidth * 160, MIN_WIDTH);
    }
  }, {
    key: "scrollLeft",
    get: function get() {
      var rate = this.viewWidth / this.scrollWidth;
      var currentDate = dayjs(this.translateAmp).toString();
      // 默认滚动条在中间
      var half = (this.viewWidth - this.scrollBarWidth) / 2;
      var viewScrollLeft = half + rate * (this.getTranslateXByDate(currentDate) - this.getTranslateXByDate(this.getStartDate()));
      return Math.min(Math.max(viewScrollLeft, 0), this.viewWidth - this.scrollBarWidth);
    }
  }, {
    key: "scrollWidth",
    get: function get() {
      // TODO 待研究
      // 最小宽度
      var init = this.viewWidth + 200;
      return Math.max(Math.abs(this.viewWidth + this.translateX - this.getTranslateXByDate(this.getStartDate())), init);
    }

    // 内容区滚动高度
  }, {
    key: "bodyClientHeight",
    get: function get() {
      // 1是边框
      return this.height - HEADER_HEIGHT - 1;
    }
  }, {
    key: "getColumnsWidth",
    get: function get() {
      var _this$columns$;
      if (this.columns.length === 1 && ((_this$columns$ = this.columns[0]) === null || _this$columns$ === void 0 ? void 0 : _this$columns$.width) < 200) return [200];
      var totalColumnWidth = this.columns.reduce(function (width, item) {
        return width + (item.width || 0);
      }, 0);
      var totalFlex = this.columns.reduce(function (total, item) {
        return total + (item.width ? 0 : item.flex || 1);
      }, 0);
      var restWidth = this.tableWidth - totalColumnWidth;
      return this.columns.map(function (column) {
        if (column.width) return column.width;
        if (column.flex) return restWidth * (column.flex / totalFlex);
        return restWidth * (1 / totalFlex);
      });
    }
  }, {
    key: "totalColumnWidth",
    get: function get() {
      return this.getColumnsWidth.reduce(function (width, item) {
        return width + (item || 0);
      }, 0);
    }

    // 内容区滚动区域域高度
  }, {
    key: "bodyScrollHeight",
    get: function get() {
      var height = this.getBarList.length * this.rowHeight + TOP_PADDING;
      if (height < this.bodyClientHeight) height = this.bodyClientHeight;
      return height;
    }

    // 1px对应的毫秒数
  }, {
    key: "pxUnitAmp",
    get: function get() {
      return this.sightConfig.value * 1000;
    }

    /** 当前开始时间毫秒数 */
  }, {
    key: "translateAmp",
    get: function get() {
      var translateX = this.translateX;
      return this.pxUnitAmp * translateX;
    }
  }, {
    key: "getDurationAmp",
    value: function getDurationAmp() {
      var clientWidth = this.viewWidth;
      return this.pxUnitAmp * clientWidth;
    }
  }, {
    key: "getMajorList",
    value: function getMajorList() {
      var majorFormatMap = {
        day: this.locale.majorFormat.day,
        week: this.locale.majorFormat.week,
        month: this.locale.majorFormat.month,
        quarter: this.locale.majorFormat.quarter,
        halfYear: this.locale.majorFormat.halfYear
      };
      var translateAmp = this.translateAmp;
      var endAmp = translateAmp + this.getDurationAmp();
      var type = this.sightConfig.type;
      var format = majorFormatMap[type];
      var getNextDate = function getNextDate(start) {
        if (type === 'day' || type === 'week') return start.add(1, 'month');
        return start.add(1, 'year');
      };
      var getStart = function getStart(date) {
        if (type === 'day' || type === 'week') return date.startOf('month');
        return date.startOf('year');
      };
      var getEnd = function getEnd(date) {
        if (type === 'day' || type === 'week') return date.endOf('month');
        return date.endOf('year');
      };

      // 初始化当前时间
      var currentDate = dayjs(translateAmp);
      var dates = [];

      // 对可视区域内的时间进行迭代
      while (currentDate.isBetween(translateAmp - 1, endAmp + 1)) {
        var majorKey = currentDate.format(format);
        var start = currentDate;
        var end = getEnd(start);
        if (dates.length > 0) start = getStart(currentDate);
        dates.push({
          label: majorKey,
          startDate: start,
          endDate: end
        });

        // 获取下次迭代的时间
        start = getStart(currentDate);
        currentDate = getNextDate(start);
      }
      return this.majorAmp2Px(dates);
    }
  }, {
    key: "majorAmp2Px",
    value: function majorAmp2Px(ampList) {
      var pxUnitAmp = this.pxUnitAmp;
      return ampList.map(function (item) {
        var startDate = item.startDate;
        var endDate = item.endDate;
        var label = item.label;
        var left = startDate.valueOf() / pxUnitAmp;
        var width = (endDate.valueOf() - startDate.valueOf()) / pxUnitAmp;
        return {
          label: label,
          left: left,
          width: width,
          key: startDate.format('YYYY-MM-DD HH:mm:ss')
        };
      });
    }
  }, {
    key: "getMinorList",
    value: function getMinorList() {
      var _this2 = this;
      var minorFormatMap = {
        day: this.locale.minorFormat.day,
        week: this.locale.minorFormat.week,
        month: this.locale.minorFormat.month,
        quarter: this.locale.minorFormat.quarter,
        halfYear: this.locale.minorFormat.halfYear
      };
      var fstHalfYear = new Set([0, 1, 2, 3, 4, 5]);
      var startAmp = this.translateAmp;
      var endAmp = startAmp + this.getDurationAmp();
      var format = minorFormatMap[this.sightConfig.type];
      var getNextDate = function getNextDate(start) {
        var map = {
          day: function day() {
            return start.add(1, 'day');
          },
          week: function week() {
            return start.add(1, 'week');
          },
          month: function month() {
            return start.add(1, 'month');
          },
          quarter: function quarter() {
            return start.add(1, 'quarter');
          },
          halfYear: function halfYear() {
            return start.add(6, 'month');
          }
        };
        return map[_this2.sightConfig.type]();
      };
      var setStart = function setStart(date) {
        var map = {
          day: function day() {
            return date.startOf('day');
          },
          week: function week() {
            return date.weekday(1).hour(0).minute(0).second(0);
          },
          month: function month() {
            return date.startOf('month');
          },
          quarter: function quarter() {
            return date.startOf('quarter');
          },
          halfYear: function halfYear() {
            if (fstHalfYear.has(date.month())) return date.month(0).startOf('month');
            return date.month(6).startOf('month');
          }
        };
        return map[_this2.sightConfig.type]();
      };
      var setEnd = function setEnd(start) {
        var map = {
          day: function day() {
            return start.endOf('day');
          },
          week: function week() {
            return start.weekday(7).hour(23).minute(59).second(59);
          },
          month: function month() {
            return start.endOf('month');
          },
          quarter: function quarter() {
            return start.endOf('quarter');
          },
          halfYear: function halfYear() {
            if (fstHalfYear.has(start.month())) return start.month(5).endOf('month');
            return start.month(11).endOf('month');
          }
        };
        return map[_this2.sightConfig.type]();
      };
      var getMinorKey = function getMinorKey(date) {
        if (_this2.sightConfig.type === 'halfYear') return date.format(format) + (fstHalfYear.has(date.month()) ? _this2.locale.firstHalf : _this2.locale.secondHalf);
        return date.format(format);
      };

      // 初始化当前时间
      var currentDate = dayjs(startAmp);
      var dates = [];
      while (currentDate.isBetween(startAmp - 1, endAmp + 1)) {
        var minorKey = getMinorKey(currentDate);
        var start = setStart(currentDate);
        var end = setEnd(start);
        dates.push({
          label: minorKey.split('-').pop(),
          startDate: start,
          endDate: end
        });
        currentDate = getNextDate(start);
      }
      return this.minorAmp2Px(dates);
    }
  }, {
    key: "minorAmp2Px",
    value: function minorAmp2Px(ampList) {
      var _this3 = this;
      var pxUnitAmp = this.pxUnitAmp;
      return ampList.map(function (item) {
        var startDate = item.startDate;
        var endDate = item.endDate;
        var label = item.label;
        var left = startDate.valueOf() / pxUnitAmp;
        var width = (endDate.valueOf() - startDate.valueOf()) / pxUnitAmp;
        var isWeek = false;
        if (_this3.sightConfig.type === 'day') isWeek = _this3.isRestDay(startDate.toString());
        return {
          label: label,
          left: left,
          width: width,
          isWeek: isWeek,
          key: startDate.format('YYYY-MM-DD HH:mm:ss')
        };
      });
    }
  }, {
    key: "getTaskBarThumbVisible",
    value: function getTaskBarThumbVisible(barInfo) {
      var width = barInfo.width,
        barTranslateX = barInfo.translateX,
        invalidDateRange = barInfo.invalidDateRange;
      if (invalidDateRange) return false;
      var rightSide = this.translateX + this.viewWidth;
      return barTranslateX + width < this.translateX || barTranslateX - rightSide > 0;
    }
  }, {
    key: "scrollToBar",
    value: function scrollToBar(barInfo, type) {
      var barTranslateX = barInfo.translateX,
        width = barInfo.width;
      var translateX1 = this.translateX + this.viewWidth / 2;
      var translateX2 = barTranslateX + width;
      var diffX = Math.abs(translateX2 - translateX1);
      var translateX = this.translateX + diffX;
      if (type === 'left') translateX = this.translateX - diffX;
      this.setTranslateX(translateX);
    }
  }, {
    key: "getBarList",
    get: function get() {
      var _this4 = this;
      var pxUnitAmp = this.pxUnitAmp,
        data = this.data;
      // 最小宽度
      var minStamp = 11 * pxUnitAmp;
      // TODO 去除高度读取
      var height = 8;
      var baseTop = TOP_PADDING + this.rowHeight / 2 - height / 2;
      var topStep = this.rowHeight;
      var dateTextFormat = function dateTextFormat(startX) {
        return dayjs(startX * pxUnitAmp).format('YYYY-MM-DD');
      };
      var getDateWidth = function getDateWidth(start, endX) {
        var startDate = dayjs(start * pxUnitAmp);
        var endDate = dayjs(endX * pxUnitAmp);
        return "".concat(startDate.diff(endDate, 'day') + 1);
      };
      var flattenData = flattenDeep(data);
      var barList = flattenData.map(function (item, index) {
        var valid = item.startDate && item.endDate;
        var startAmp = dayjs(item.startDate || 0).startOf('day').valueOf();
        var endAmp = dayjs(item.endDate || 0).endOf('day').valueOf();

        // 开始结束日期相同默认一天
        if (Math.abs(endAmp - startAmp) < minStamp) {
          startAmp = dayjs(item.startDate || 0).startOf('day').valueOf();
          endAmp = dayjs(item.endDate || 0).endOf('day').add(minStamp, 'millisecond').valueOf();
        }
        var width = valid ? (endAmp - startAmp) / pxUnitAmp : 0;
        var translateX = valid ? startAmp / pxUnitAmp : 0;
        var translateY = baseTop + index * topStep;
        var _parent = item._parent;
        var record = _objectSpread(_objectSpread({}, item.record), {}, {
          disabled: _this4.disabled || item.record.disabled
        });
        var bar = {
          key: item.key,
          task: item,
          record: record,
          translateX: translateX,
          translateY: translateY,
          width: width,
          label: item.content,
          stepGesture: 'end',
          // start(开始）、moving(移动)、end(结束)
          invalidDateRange: !item.endDate || !item.startDate,
          // 是否为有效时间区间
          dateTextFormat: dateTextFormat,
          getDateWidth: getDateWidth,
          loading: false,
          _group: item.group,
          _collapsed: item.collapsed,
          // 是否折叠
          _depth: item._depth,
          // 表示子节点深度
          _index: item._index,
          // 任务下标位置
          _parent: _parent,
          // 原任务数据
          _childrenCount: !item.children ? 0 : item.children.length // 子任务
        };
        item._bar = bar;
        return bar;
      });
      // 进行展开扁平
      return observable(barList);
    }
  }, {
    key: "getVisibleRows",
    get:
    // 虚拟滚动
    function get() {
      var visibleHeight = this.bodyClientHeight;
      // 多渲染几个，减少空白
      var visibleRowCount = Math.ceil(visibleHeight / this.rowHeight) + 10;
      var start = Math.max(Math.ceil(this.scrollTop / this.rowHeight) - 5, 0);
      return {
        start: start,
        count: visibleRowCount
      };
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.showSelectionIndicator = false;
    }
  }, {
    key: "showSelectionBar",
    value: function showSelectionBar(event) {
      var _this$mainElementRef$, _this$mainElementRef$2;
      var scrollTop = ((_this$mainElementRef$ = this.mainElementRef.current) === null || _this$mainElementRef$ === void 0 ? void 0 : _this$mainElementRef$.scrollTop) || 0;
      var _ref2 = ((_this$mainElementRef$2 = this.mainElementRef.current) === null || _this$mainElementRef$2 === void 0 ? void 0 : _this$mainElementRef$2.getBoundingClientRect()) || {
          top: 0
        },
        top = _ref2.top;
      // 内容区高度
      var contentHeight = this.getBarList.length * this.rowHeight;
      var offsetY = event.clientY - top + scrollTop;
      if (offsetY - contentHeight > TOP_PADDING) {
        this.showSelectionIndicator = false;
      } else {
        var topValue = Math.floor((offsetY - TOP_PADDING) / this.rowHeight) * this.rowHeight + TOP_PADDING;
        this.showSelectionIndicator = true;
        this.selectionIndicatorTop = topValue;
      }
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(barInfo, type) {
      this.dragging = barInfo;
      this.draggingType = type;
      barInfo.stepGesture = 'start';
      this.isPointerPress = true;
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd() {
      if (this.dragging) {
        this.dragging.stepGesture = 'end';
        this.dragging = null;
      }
      this.draggingType = null;
      this.isPointerPress = false;
    }
  }, {
    key: "handleInvalidBarLeave",
    value: function handleInvalidBarLeave() {
      this.handleDragEnd();
    }
  }, {
    key: "handleInvalidBarHover",
    value: function handleInvalidBarHover(barInfo, left, width) {
      barInfo.translateX = left;
      barInfo.width = width;
      this.handleDragStart(barInfo, 'create');
    }
  }, {
    key: "handleInvalidBarDragStart",
    value: function handleInvalidBarDragStart(barInfo) {
      barInfo.stepGesture = 'moving';
    }
  }, {
    key: "handleInvalidBarDragEnd",
    value: function handleInvalidBarDragEnd(barInfo, oldSize) {
      barInfo.invalidDateRange = false;
      this.handleDragEnd();
      this.updateTaskDate(barInfo, oldSize, 'create');
    }
  }, {
    key: "updateBarSize",
    value: function updateBarSize(barInfo, _ref3) {
      var width = _ref3.width,
        x = _ref3.x;
      barInfo.width = width;
      barInfo.translateX = Math.max(x, 0);
      barInfo.stepGesture = 'moving';
    }
  }, {
    key: "getMovedDay",
    value: function getMovedDay(ms) {
      return Math.round(ms / ONE_DAY_MS);
    }

    /** 更新时间 */
  }, {
    key: "updateTaskDate",
    value: (function () {
      var _updateTaskDate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(barInfo, oldSize, type) {
        var translateX, width, task, record, oldStartDate, oldEndDate, startDate, endDate, moveTime, _moveTime, _moveTime2, success;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              translateX = barInfo.translateX, width = barInfo.width, task = barInfo.task, record = barInfo.record;
              oldStartDate = barInfo.task.startDate;
              oldEndDate = barInfo.task.endDate;
              startDate = oldStartDate;
              endDate = oldEndDate;
              if (type === 'move') {
                moveTime = this.getMovedDay((translateX - oldSize.x) * this.pxUnitAmp); // 移动，只根据移动距离偏移
                startDate = dayjs(oldStartDate).add(moveTime, 'day').format('YYYY-MM-DD HH:mm:ss');
                endDate = dayjs(oldEndDate).add(moveTime, 'day').hour(23).minute(59).second(59).format('YYYY-MM-DD HH:mm:ss');
              } else if (type === 'left') {
                _moveTime = this.getMovedDay((translateX - oldSize.x) * this.pxUnitAmp); // 左侧移动，只改变开始时间
                startDate = dayjs(oldStartDate).add(_moveTime, 'day').format('YYYY-MM-DD HH:mm:ss');
              } else if (type === 'right') {
                _moveTime2 = this.getMovedDay((width - oldSize.width) * this.pxUnitAmp); // 右侧移动，只改变结束时间
                endDate = dayjs(oldEndDate).add(_moveTime2, 'day').hour(23).minute(59).second(59).format('YYYY-MM-DD HH:mm:ss');
              } else if (type === 'create') {
                // 创建
                startDate = dayjs(translateX * this.pxUnitAmp).format('YYYY-MM-DD HH:mm:ss');
                endDate = dayjs((translateX + width) * this.pxUnitAmp).subtract(1).hour(23).minute(59).second(59).format('YYYY-MM-DD HH:mm:ss');
              }
              if (!(startDate === oldStartDate && endDate === oldEndDate)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return");
            case 8:
              runInAction(function () {
                barInfo.loading = true;
              });
              _context.next = 11;
              return this.onUpdate(toJS(record), startDate, endDate);
            case 11:
              success = _context.sent;
              if (success) {
                runInAction(function () {
                  task.startDate = startDate;
                  task.endDate = endDate;
                });
              } else {
                barInfo.width = oldSize.width;
                barInfo.translateX = oldSize.x;
              }
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function updateTaskDate(_x, _x2, _x3) {
        return _updateTaskDate.apply(this, arguments);
      }
      return updateTaskDate;
    }())
  }, {
    key: "isToday",
    value: function isToday(key) {
      var now = dayjs().format('YYYY-MM-DD');
      var target = dayjs(key).format('YYYY-MM-DD');
      return target === now;
    }
  }]);
  return GanttStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "originData", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "columns", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "dependencies", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "scrolling", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "scrollTop", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "collapse", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "tableWidth", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "viewWidth", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "width", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "height", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "bodyWidth", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "translateX", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "sightConfig", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "showSelectionIndicator", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "selectionIndicatorTop", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "dragging", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "draggingType", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "disabled", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "setData", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleCollapse", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleCollapse"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setRowCollapse", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setRowCollapse"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setOnUpdate", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setOnUpdate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setColumns", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setColumns"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setDependencies", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setDependencies"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setHideTable", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setHideTable"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handlePanMove", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handlePanMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handlePanEnd", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handlePanEnd"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "syncSize", [action], Object.getOwnPropertyDescriptor(_class.prototype, "syncSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleResizeTableWidth", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleResizeTableWidth"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initWidth", [action], Object.getOwnPropertyDescriptor(_class.prototype, "initWidth"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setTranslateX", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setTranslateX"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "switchSight", [action], Object.getOwnPropertyDescriptor(_class.prototype, "switchSight"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "scrollToToday", [action], Object.getOwnPropertyDescriptor(_class.prototype, "scrollToToday"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "todayTranslateX", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "todayTranslateX"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "scrollBarWidth", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "scrollBarWidth"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "scrollLeft", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "scrollLeft"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "scrollWidth", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "scrollWidth"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bodyClientHeight", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "bodyClientHeight"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getColumnsWidth", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "getColumnsWidth"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "totalColumnWidth", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "totalColumnWidth"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bodyScrollHeight", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "bodyScrollHeight"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pxUnitAmp", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "pxUnitAmp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "translateAmp", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "translateAmp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getBarList", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "getBarList"), _class.prototype), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "handleWheel", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this5 = this;
    return function (event) {
      if (event.deltaX !== 0) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (_this5._wheelTimer) clearTimeout(_this5._wheelTimer);
      // 水平滚动
      if (Math.abs(event.deltaX) > 0) {
        _this5.scrolling = true;
        _this5.setTranslateX(_this5.translateX + event.deltaX);
      }
      _this5._wheelTimer = window.setTimeout(function () {
        _this5.scrolling = false;
      }, 100);
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "getVisibleRows", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "getVisibleRows"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showSelectionBar", [action], Object.getOwnPropertyDescriptor(_class.prototype, "showSelectionBar"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDragStart", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDragStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDragEnd", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDragEnd"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInvalidBarLeave", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleInvalidBarLeave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInvalidBarHover", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleInvalidBarHover"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInvalidBarDragStart", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleInvalidBarDragStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInvalidBarDragEnd", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleInvalidBarDragEnd"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateBarSize", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateBarSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateTaskDate", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateTaskDate"), _class.prototype)), _class);
export default GanttStore;
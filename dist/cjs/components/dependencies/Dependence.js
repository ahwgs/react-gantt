"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _find = _interopRequireDefault(require("lodash/find"));
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("../../context"));
require("./Dependence.css");
var spaceX = 10;
var spaceY = 10;
/**
 * 获取关键点
 *
 * @param from
 * @param to
 */
function getPoints(from, to, type) {
  var fromX = from.x,
    fromY = from.y;
  var toX = to.x,
    toY = to.y;
  var sameSide = type === 'finish_finish' || type === 'start_start';
  // 同向，只需要两个关键点
  if (sameSide) {
    if (type === 'start_start') {
      return [{
        x: Math.min(fromX - spaceX, toX - spaceX),
        y: fromY
      }, {
        x: Math.min(fromX - spaceX, toX - spaceX),
        y: toY
      }];
    }
    return [{
      x: Math.max(fromX + spaceX, toX + spaceX),
      y: fromY
    }, {
      x: Math.max(fromX + spaceX, toX + spaceX),
      y: toY
    }];
  }
  // 不同向，需要四个关键点

  return [{
    x: type === 'finish_start' ? fromX + spaceX : fromX - spaceX,
    y: fromY
  }, {
    x: type === 'finish_start' ? fromX + spaceX : fromX - spaceX,
    y: toY - spaceY
  }, {
    x: type === 'finish_start' ? toX - spaceX : toX + spaceX,
    y: toY - spaceY
  }, {
    x: type === 'finish_start' ? toX - spaceX : toX + spaceX,
    y: toY
  }];
}
var Dependence = function Dependence(_ref) {
  var data = _ref.data;
  var _useContext = (0, _react.useContext)(_context.default),
    store = _useContext.store,
    barHeight = _useContext.barHeight;
  var from = data.from,
    to = data.to,
    type = data.type,
    _data$color = data.color,
    color = _data$color === void 0 ? '#f87872' : _data$color;
  var barList = store.getBarList;
  var fromBar = (0, _find.default)(barList, function (bar) {
    return bar.record.id === from;
  });
  var toBar = (0, _find.default)(barList, function (bar) {
    return bar.record.id === to;
  });
  if (!fromBar || !toBar) return null;
  var posY = barHeight / 2;
  var _ref2 = function () {
      return [{
        x: type === 'finish_finish' || type === 'finish_start' ? fromBar.translateX + fromBar.width : fromBar.translateX,
        y: fromBar.translateY + posY
      }, {
        x: type === 'finish_finish' || type === 'start_finish' ? toBar.translateX + toBar.width : toBar.translateX,
        y: toBar.translateY + posY
      }];
    }(),
    _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
    start = _ref3[0],
    end = _ref3[1];
  var points = [].concat((0, _toConsumableArray2.default)(getPoints(start, end, type)), [end]);
  var endPosition = type === 'start_finish' || type === 'finish_finish' ? -1 : 1;
  return /*#__PURE__*/_react.default.createElement("g", {
    stroke: color,
    className: 'task-dependency-line'
  }, /*#__PURE__*/_react.default.createElement("path", {
    style: {
      stroke: color
    },
    d: "\n          M".concat(start.x, ",").concat(start.y, "\n          ").concat(points.map(function (point) {
      return "L".concat(point.x, ",").concat(point.y);
    }).join('\n'), "\n          L").concat(end.x, ",").concat(end.y, "\n          "),
    strokeWidth: "1",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    name: "arrow",
    strokeWidth: "1",
    fill: color,
    d: "\n        M".concat(end.x, ",").concat(end.y, " \n        L").concat(end.x - 4 * endPosition, ",").concat(end.y - 3 * endPosition, " \n        L").concat(end.x - 4 * endPosition, ",").concat(end.y + 3 * endPosition, " \n        Z")
  }));
};
var _default = exports.default = (0, _mobxReactLite.observer)(Dependence);
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import find from 'lodash/find';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Context from "../../context";
import "./Dependence.css";
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
  var _useContext = useContext(Context),
    store = _useContext.store,
    barHeight = _useContext.barHeight;
  var from = data.from,
    to = data.to,
    type = data.type,
    _data$color = data.color,
    color = _data$color === void 0 ? '#f87872' : _data$color;
  var barList = store.getBarList;
  var fromBar = find(barList, function (bar) {
    return bar.record.id === from;
  });
  var toBar = find(barList, function (bar) {
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
    _ref3 = _slicedToArray(_ref2, 2),
    start = _ref3[0],
    end = _ref3[1];
  var points = [].concat(_toConsumableArray(getPoints(start, end, type)), [end]);
  var endPosition = type === 'start_finish' || type === 'finish_finish' ? -1 : 1;
  return /*#__PURE__*/React.createElement("g", {
    stroke: color,
    className: 'task-dependency-line'
  }, /*#__PURE__*/React.createElement("path", {
    style: {
      stroke: color
    },
    d: "\n          M".concat(start.x, ",").concat(start.y, "\n          ").concat(points.map(function (point) {
      return "L".concat(point.x, ",").concat(point.y);
    }).join('\n'), "\n          L").concat(end.x, ",").concat(end.y, "\n          "),
    strokeWidth: "1",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    name: "arrow",
    strokeWidth: "1",
    fill: color,
    d: "\n        M".concat(end.x, ",").concat(end.y, " \n        L").concat(end.x - 4 * endPosition, ",").concat(end.y - 3 * endPosition, " \n        L").concat(end.x - 4 * endPosition, ",").concat(end.y + 3 * endPosition, " \n        Z")
  }));
};
export default observer(Dependence);
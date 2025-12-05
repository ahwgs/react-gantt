import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
/**
 * 将树形数据向下递归为一维数组
 *
 * @param {any} arr 数据源
 */
export function flattenDeep() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var parent = arguments.length > 2 ? arguments[2] : undefined;
  var index = 0;
  return array.reduce(function (flat, item) {
    item._depth = depth;
    item._parent = parent;
    item._index = index;
    index += 1;
    return [].concat(_toConsumableArray(flat), [item], _toConsumableArray(item.children && !item.collapsed ? flattenDeep(item.children, depth + 1, item) : []));
  }, []);
}
export function getMaxRange(bar) {
  var minTranslateX = 0;
  var maxTranslateX = 0;
  var temporary = [bar];
  while (temporary.length > 0) {
    var current = temporary.shift();
    if (current) {
      var _current$translateX = current.translateX,
        translateX = _current$translateX === void 0 ? 0 : _current$translateX,
        _current$width = current.width,
        width = _current$width === void 0 ? 0 : _current$width;
      if (minTranslateX === 0) minTranslateX = translateX || 0;
      if (translateX) {
        minTranslateX = Math.min(translateX, minTranslateX);
        maxTranslateX = Math.max(translateX + width, maxTranslateX);
      }
      if (current.task.children && current.task.children.length > 0) {
        var _iterator = _createForOfIteratorHelper(current.task.children),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var t = _step.value;
            if (t._bar) temporary.push(t._bar);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }
  return {
    translateX: minTranslateX,
    width: maxTranslateX - minTranslateX
  };
}
var genKey = function () {
  var key = 0;
  return function () {
    return key++;
  };
}();
export function transverseData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var startDateKey = arguments.length > 1 ? arguments[1] : undefined;
  var endDateKey = arguments.length > 2 ? arguments[2] : undefined;
  var result = [];
  var _iterator2 = _createForOfIteratorHelper(data),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var record = _step2.value;
      var item = {
        key: genKey(),
        record: record,
        content: '',
        group: record.group,
        startDate: record[startDateKey] || '',
        endDate: record[endDateKey] || '',
        collapsed: record.collapsed || false,
        children: transverseData(record.children || [], startDateKey, endDateKey)
      };
      result.push(item);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result;
}
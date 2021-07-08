import { Gantt } from './types';

/**
 * 将树形数据向下递归为一维数组
 * @param {*} arr 数据源
 */
export function flattenDeep(
  arr: Gantt.Item[] = [],
  depth = 0,
  parent: Gantt.Item | undefined = undefined
): Gantt.Item[] {
  let index = 0;
  return arr.reduce((flat: Gantt.Item[], item) => {
    item._depth = depth;
    item._parent = parent;
    item._index = index;
    index += 1;
    return [
      ...flat,
      item,
      ...(item.children && !item.collapsed
        ? flattenDeep(item.children, depth + 1, item)
        : []),
    ];
  }, []);
}

export function getMaxRange(bar: Gantt.Bar) {
  let minTranslateX = 0;
  let maxTranslateX = 0;
  const temp: Gantt.Bar[] = [bar];

  while (temp.length > 0) {
    const current = temp.shift();
    if (current) {
      const { translateX = 0, width = 0 } = current;
      if (minTranslateX === 0) {
        minTranslateX = translateX || 0;
      }
      if (translateX) {
        minTranslateX = Math.min(translateX, minTranslateX);
        maxTranslateX = Math.max(translateX + width, maxTranslateX);
      }
      if (current.task.children && current.task.children.length > 0) {
        current.task.children.forEach((t) => {
          if (t._bar) {
            temp.push(t._bar);
          }
        });
      }
    }
  }

  return {
    translateX: minTranslateX,
    width: maxTranslateX - minTranslateX,
  };
}
const genKey = (() => {
  let key = 0;
  return function () {
    return key++;
  };
})();
export function transverseData(
  data: Gantt.Record[] = [],
  startDateKey: string,
  endDateKey: string
) {
  const result: Gantt.Item[] = [];

  data.forEach((record) => {
    const item: Gantt.Item = {
      key: genKey(),
      record,
      content: '',
      group: record.group,
      startDate: record[startDateKey] || '',
      endDate: record[endDateKey] || '',
      collapsed: record.collapsed || false,
      children: transverseData(record.children || [], startDateKey, endDateKey),
    };
    result.push(item);
  });
  return result;
}

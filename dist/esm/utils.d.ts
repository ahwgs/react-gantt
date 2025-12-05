import { Gantt } from './types';
/**
 * 将树形数据向下递归为一维数组
 *
 * @param {any} arr 数据源
 */
export declare function flattenDeep(array?: Gantt.Item[], depth?: number, parent?: Gantt.Item | undefined): Gantt.Item[];
export declare function getMaxRange(bar: Gantt.Bar): {
    translateX: number;
    width: number;
};
export declare function transverseData(data: Gantt.Record[], startDateKey: string, endDateKey: string): Gantt.Item<import("./types").DefaultRecordType>[];

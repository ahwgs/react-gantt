import { GanttLocale } from './Gantt';
import { Gantt } from './types';

export type StoreBootstrapParams = {
  rowHeight: number;
  disabled: boolean;
  customSights: Gantt.SightConfig[];
  locale: GanttLocale;
  columnsWidth?: number;
};

export type StoreActionType = {
  bootstrap: ({
    rowHeight,
    disabled,
    customSights,
    locale,
    columnsWidth,
  }: StoreBootstrapParams) => void;
};

export type StoreType = StoreActionType & {
  rowHeight: number;
  tableDisabled: boolean;
};

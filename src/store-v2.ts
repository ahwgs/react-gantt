import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import type { StateCreator } from 'zustand/vanilla';
import { ROW_HEIGHT } from './constants';
import { StoreBootstrapParams, StoreType } from './storeType';

const store: StateCreator<StoreType> = (set, get) => ({
  tableDisabled: false,
  rowHeight: ROW_HEIGHT,
  width: 0,
  height: 0,
  viewTypeList: [],
  bootstrap(params: StoreBootstrapParams) {
    // this.width = 1320;
    // this.height = 418;
    // this.viewTypeList = customSights.length
    //   ? customSights
    //   : getViewTypeList(locale);
    // const sightConfig = customSights.length
    //   ? customSights[0]
    //   : getViewTypeList(locale)[0];
    // const translateX =
    //   dayjs(this.getStartDate()).valueOf() / (sightConfig.value * 1000);
    // const bodyWidth = this.width;
    // const viewWidth = 704;
    // const tableWidth = columnsWidth ?? 500;
    // this.viewWidth = viewWidth;
    // this.tableWidth = tableWidth;
    // this.translateX = translateX;
    // this.sightConfig = sightConfig;
    // this.bodyWidth = bodyWidth;
    // this.rowHeight = rowHeight;
    // this.disabled = disabled;
    // this.locale = locale;
    set({
      rowHeight: params.rowHeight,
      tableDisabled: params.disabled,
    });
  },
});

const userStore = create(subscribeWithSelector<StoreType>(store));

export const useGanttStore = userStore;

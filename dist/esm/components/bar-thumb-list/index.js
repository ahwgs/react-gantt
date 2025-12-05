/* eslint-disable no-underscore-dangle */
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Context from "../../context";
import TaskBarThumb from "../task-bar-thumb";
var BarThumbList = function BarThumbList() {
  var _useContext = useContext(Context),
    store = _useContext.store;
  var barList = store.getBarList;
  var _store$getVisibleRows = store.getVisibleRows,
    count = _store$getVisibleRows.count,
    start = _store$getVisibleRows.start;
  return /*#__PURE__*/React.createElement(React.Fragment, null, barList.slice(start, start + count).map(function (bar) {
    if (store.getTaskBarThumbVisible(bar)) return /*#__PURE__*/React.createElement(TaskBarThumb, {
      data: bar,
      key: bar.key
    });
    return null;
  }));
};
export default observer(BarThumbList);
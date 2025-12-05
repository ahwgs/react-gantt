/* eslint-disable no-underscore-dangle */
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Context from "../../context";
import GroupBar from "../group-bar";
import InvalidTaskBar from "../invalid-task-bar";
import TaskBar from "../task-bar";
var BarList = function BarList() {
  var _useContext = useContext(Context),
    store = _useContext.store;
  var barList = store.getBarList;
  var _store$getVisibleRows = store.getVisibleRows,
    count = _store$getVisibleRows.count,
    start = _store$getVisibleRows.start;
  return /*#__PURE__*/React.createElement(React.Fragment, null, barList.slice(start, start + count).map(function (bar) {
    if (bar._group) return /*#__PURE__*/React.createElement(GroupBar, {
      key: bar.key,
      data: bar
    });
    return bar.invalidDateRange ? /*#__PURE__*/React.createElement(InvalidTaskBar, {
      key: bar.key,
      data: bar
    }) : /*#__PURE__*/React.createElement(TaskBar, {
      key: bar.key,
      data: bar
    });
  }));
};
export default observer(BarList);
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from "../../context";
import "./index.css";

/**
 * 鼠标hover效果模拟
 */
var SelectionIndicator = function SelectionIndicator() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var showSelectionIndicator = store.showSelectionIndicator,
    selectionIndicatorTop = store.selectionIndicatorTop,
    rowHeight = store.rowHeight;
  var prefixClsSelectionIndicator = "".concat(prefixCls, "-selection-indicator");
  return showSelectionIndicator ? /*#__PURE__*/React.createElement("div", {
    className: prefixClsSelectionIndicator,
    style: {
      height: rowHeight,
      top: selectionIndicatorTop
    }
  }) : null;
};
export default observer(SelectionIndicator);
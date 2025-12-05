import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from "../../context";
import { ONE_DAY_MS } from "../../store";
import "./index.css";
var Today = function Today() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  var isRTL = store.isRTL;
  var halfDayWidth = ONE_DAY_MS / store.pxUnitAmp / 2;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-today"),
    style: {
      transform: "translate(".concat(store.todayTranslateX + halfDayWidth, "px)"),
      left: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-today_line"),
    style: {
      height: store.bodyScrollHeight
    }
  }));
};
export default observer(Today);
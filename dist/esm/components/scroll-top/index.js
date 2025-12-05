import React, { useCallback, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from "../../context";
import "./index.css";
var ScrollTop = function ScrollTop() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    scrollTopConfig = _useContext.scrollTop,
    prefixCls = _useContext.prefixCls;
  var scrollTop = store.scrollTop;
  var handleClick = useCallback(function () {
    if (store.mainElementRef.current) {
      store.mainElementRef.current.scrollTop = 0;
    }
  }, [store.mainElementRef]);
  if (scrollTop <= 100 || !store.mainElementRef.current) {
    return null;
  }
  var prefixClsScrollTop = "".concat(prefixCls, "-scroll_top");
  return /*#__PURE__*/React.createElement("div", {
    className: prefixClsScrollTop,
    style: scrollTopConfig instanceof Object ? scrollTopConfig : undefined,
    onClick: handleClick
  });
};
export default observer(ScrollTop);
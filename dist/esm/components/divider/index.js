import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext } from 'react';
import Context from "../../context";
import useDragResize from "../../hooks/useDragResize";
import "./index.css";
var Divider = function Divider() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    tableCollapseAble = _useContext.tableCollapseAble,
    prefixCls = _useContext.prefixCls;
  var prefixClsDivider = "".concat(prefixCls, "-divider");
  var tableWidth = store.tableWidth;
  var handleClick = useCallback(function (event) {
    event.stopPropagation();
    store.toggleCollapse();
  }, [store]);
  var left = tableWidth;
  var handleResize = useCallback(function (_ref) {
    var width = _ref.width;
    store.handleResizeTableWidth(width);
  }, [store]);
  var _useDragResize = useDragResize(handleResize, {
      initSize: {
        width: tableWidth
      },
      minWidth: 200,
      maxWidth: store.width * 0.6,
      direction: store.isRTL ? -1 : 1
    }),
    _useDragResize2 = _slicedToArray(_useDragResize, 2),
    handleMouseDown = _useDragResize2[0],
    resizing = _useDragResize2[1];
  return /*#__PURE__*/React.createElement("div", {
    role: "none",
    className: classNames(prefixClsDivider, _defineProperty({}, "".concat(prefixClsDivider, "_only"), !tableCollapseAble)),
    style: _defineProperty({}, store.isRTL ? 'right' : 'left', left - 1),
    onMouseDown: tableWidth === 0 ? undefined : handleMouseDown
  }, resizing && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 9999,
      cursor: 'col-resize'
    }
  }), /*#__PURE__*/React.createElement("hr", null), tableCollapseAble && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixClsDivider, "-icon-wrapper"),
    role: "none",
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("i", {
    className: classNames("".concat(prefixClsDivider, "-arrow"), _defineProperty({}, "".concat(prefixClsDivider, "-reverse"), store.isRTL ? left > 0 : left <= 0))
  })));
};
export default observer(Divider);
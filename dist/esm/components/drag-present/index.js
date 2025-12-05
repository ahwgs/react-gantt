import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from "../../context";

/**
 * 拖动时的提示条
 */
var DragPresent = function DragPresent() {
  var _useContext = useContext(Context),
    store = _useContext.store;
  var dragging = store.dragging,
    draggingType = store.draggingType,
    bodyScrollHeight = store.bodyScrollHeight;
  if (!dragging) {
    return null;
  }
  // 和当前拖动的块一样长
  var width = dragging.width,
    translateX = dragging.translateX;
  var left = translateX;
  var right = translateX + width;
  var leftLine = draggingType === 'left' || draggingType === 'move';
  var rightLine = draggingType === 'right' || draggingType === 'move';
  return /*#__PURE__*/React.createElement("g", {
    fill: "#DAE0FF",
    stroke: "#7B90FF"
  }, leftLine && /*#__PURE__*/React.createElement("path", {
    d: "M".concat(left, ",0 L").concat(left, ",").concat(bodyScrollHeight)
  }), /*#__PURE__*/React.createElement("rect", {
    x: left,
    y: "0",
    width: width,
    height: bodyScrollHeight,
    strokeWidth: "0"
  }), rightLine && /*#__PURE__*/React.createElement("path", {
    d: "M".concat(right, ",0 L").concat(right, ",").concat(bodyScrollHeight)
  }));
};
export default observer(DragPresent);
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var AutoScroller = /*#__PURE__*/_createClass(function AutoScroller(_ref) {
  var _this = this;
  var scroller = _ref.scroller,
    _ref$rate = _ref.rate,
    rate = _ref$rate === void 0 ? 5 : _ref$rate,
    _ref$space = _ref.space,
    space = _ref$space === void 0 ? 50 : _ref$space,
    onAutoScroll = _ref.onAutoScroll,
    reachEdge = _ref.reachEdge;
  _classCallCheck(this, AutoScroller);
  _defineProperty(this, "rate", void 0);
  _defineProperty(this, "space", void 0);
  _defineProperty(this, "scroller", null);
  _defineProperty(this, "autoScrollPos", 0);
  _defineProperty(this, "clientX", null);
  _defineProperty(this, "scrollTimer", null);
  _defineProperty(this, "onAutoScroll", void 0);
  _defineProperty(this, "reachEdge", void 0);
  _defineProperty(this, "handleDraggingMouseMove", function (event) {
    _this.clientX = event.clientX;
  });
  _defineProperty(this, "handleScroll", function (position) {
    if (_this.reachEdge(position)) {
      return;
    }
    if (position === 'left') {
      _this.autoScrollPos -= _this.rate;
      _this.onAutoScroll(-_this.rate);
    } else if (position === 'right') {
      _this.autoScrollPos += _this.rate;
      _this.onAutoScroll(_this.rate);
    }
  });
  _defineProperty(this, "start", function () {
    _this.autoScrollPos = 0;
    document.addEventListener('mousemove', _this.handleDraggingMouseMove);
    var scrollFunc = function scrollFunc() {
      if (_this.scroller && _this.clientX !== null) {
        var _this$scroller, _this$scroller2;
        if (_this.clientX + _this.space > ((_this$scroller = _this.scroller) === null || _this$scroller === void 0 ? void 0 : _this$scroller.getBoundingClientRect().right)) {
          _this.handleScroll('right');
        } else if (_this.clientX - _this.space < ((_this$scroller2 = _this.scroller) === null || _this$scroller2 === void 0 ? void 0 : _this$scroller2.getBoundingClientRect().left)) {
          _this.handleScroll('left');
        }
      }
      _this.scrollTimer = requestAnimationFrame(scrollFunc);
    };
    _this.scrollTimer = requestAnimationFrame(scrollFunc);
  });
  // 停止自动滚动
  _defineProperty(this, "stop", function () {
    document.removeEventListener('mousemove', _this.handleDraggingMouseMove);
    if (_this.scrollTimer) {
      cancelAnimationFrame(_this.scrollTimer);
    }
  });
  this.scroller = scroller || null;
  this.rate = rate;
  this.space = space;
  this.onAutoScroll = onAutoScroll;
  this.reachEdge = reachEdge;
});
export default AutoScroller;
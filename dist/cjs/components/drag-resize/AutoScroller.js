"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var AutoScroller = /*#__PURE__*/(0, _createClass2.default)(function AutoScroller(_ref) {
  var _this = this;
  var scroller = _ref.scroller,
    _ref$rate = _ref.rate,
    rate = _ref$rate === void 0 ? 5 : _ref$rate,
    _ref$space = _ref.space,
    space = _ref$space === void 0 ? 50 : _ref$space,
    onAutoScroll = _ref.onAutoScroll,
    reachEdge = _ref.reachEdge;
  (0, _classCallCheck2.default)(this, AutoScroller);
  (0, _defineProperty2.default)(this, "rate", void 0);
  (0, _defineProperty2.default)(this, "space", void 0);
  (0, _defineProperty2.default)(this, "scroller", null);
  (0, _defineProperty2.default)(this, "autoScrollPos", 0);
  (0, _defineProperty2.default)(this, "clientX", null);
  (0, _defineProperty2.default)(this, "scrollTimer", null);
  (0, _defineProperty2.default)(this, "onAutoScroll", void 0);
  (0, _defineProperty2.default)(this, "reachEdge", void 0);
  (0, _defineProperty2.default)(this, "handleDraggingMouseMove", function (event) {
    _this.clientX = event.clientX;
  });
  (0, _defineProperty2.default)(this, "handleScroll", function (position) {
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
  (0, _defineProperty2.default)(this, "start", function () {
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
  (0, _defineProperty2.default)(this, "stop", function () {
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
var _default = exports.default = AutoScroller;
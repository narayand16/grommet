'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-horton', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-horton');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { stroke: 'none', fill: '#000000', fillRule: 'evenodd', d: 'M2.30070636,12.9767911 L2.14328961,12.9767911 C1.82441978,13.9656912 1.38849647,14.9344097 1.21089808,15.9475277 C0.988900101,17.2391524 0.972754793,18.5711403 0.87184662,19.8829465 C0.843592331,20.221998 0.996972755,20.3995964 1.33602422,20.4036327 C2.8617558,20.4238143 2.68819374,20.4843592 2.93844601,19.2048436 C2.95459132,19.1160444 2.9667003,19.0272452 2.99495459,18.938446 C3.51564077,17.2795156 3.53985873,15.6528759 2.72452069,14.0625631 C2.5469223,13.7194753 2.4419778,13.3400605 2.30070636,12.9767911 L2.30070636,12.9767911 Z M18.9061554,7.0554995 C18.9061554,6.77699294 18.6801211,6.55499495 18.4056509,6.55499495 C18.1271443,6.55499495 17.9051463,6.77699294 17.9051463,7.0554995 C17.9051463,7.32996973 18.1271443,7.55600404 18.4056509,7.55600404 C18.6801211,7.55600404 18.9061554,7.32996973 18.9061554,7.0554995 L18.9061554,7.0554995 Z M21.0817356,9.79212916 C21.2875883,10.2320888 21.235116,10.8133199 21.2310797,11.3299697 C21.2270434,12.2542886 21.1745711,13.1786075 21.1342079,14.1029263 C21.0978809,15.0191726 21.0575177,15.9354188 21.0090817,17.025227 C20.431887,16.6700303 19.9717457,16.419778 19.5519677,16.1170535 C19.4106963,16.0161453 19.3097881,15.7820383 19.2976791,15.6004036 C19.2008073,14.5025227 19.1039354,13.4006054 19.0716448,12.2986882 C19.0554995,11.60444 18.8698285,11.0918264 18.1473259,10.8940464 C17.7638749,10.7931382 17.5660949,10.5267407 17.4207871,10.1594349 C16.8072654,8.63370333 16.1695257,7.11200807 15.4914228,5.47325933 C16.653885,5.68718466 17.7275479,5.86074672 18.7891019,6.09081736 C18.9788093,6.13118063 19.1644803,6.36932392 19.2774975,6.56306761 C19.8990918,7.62865792 20.5529768,8.67810293 21.0817356,9.79212916 L21.0817356,9.79212916 Z M21.6508577,17.0171544 C21.6508577,17.0332997 21.667003,17.0454087 21.691221,17.0978809 C22.4621594,17.1543895 23.3057518,17.4490414 23.8627649,16.3794147 C23.4994955,16.2744702 23.1765893,16.1775984 22.8536831,16.0928355 C21.6508577,15.778002 21.6508577,15.778002 21.6508577,17.0171544 L21.6508577,17.0171544 Z M15.3501514,13.8123108 C15.2532795,13.4651867 15.0797175,13.3158426 14.7204844,13.2633703 C14.284561,13.1947528 13.7880928,13.1463169 13.4490414,12.9041372 C11.9515641,11.8183653 10.506559,10.6599395 9.02522704,9.54994955 C8.62563068,9.24722503 8.52875883,8.93239152 8.69424823,8.46821393 C8.94046418,7.77396569 9.15035318,7.06760848 9.41271443,6.26034309 C9.18668012,6.28456105 9.08173562,6.28859738 8.98082745,6.30877901 C7.67305752,6.59939455 6.37739657,6.95459132 5.05348133,7.16851665 C4.19374369,7.30978809 3.67305752,7.7457114 3.15237134,8.419778 C1.88900101,10.0544904 0.920282543,11.790111 0.565085772,13.8486377 C0.43592331,14.6034309 0.193743693,15.3380424 0,16.0807265 C0.0605449041,16.1210898 0.125126135,16.1614531 0.185671039,16.2018163 C0.310797175,16.0565086 0.48839556,15.9313824 0.552976791,15.765893 C0.956609485,14.6760848 1.33198789,13.5782038 1.72754793,12.4883956 C1.93340061,11.9233098 2.11503532,11.8789102 2.49041372,12.3592331 C2.73259334,12.6659939 2.95459132,13.0171544 3.08375378,13.3804238 C3.77396569,15.3299697 4.43592331,17.2875883 5.10998991,19.2411705 C5.51765893,20.431887 5.52169526,20.4117053 6.79313824,20.4157417 C7.27346115,20.4157417 7.44702321,20.2462159 7.40665994,19.778002 C7.32189707,18.764884 7.26942482,17.7517659 7.1765893,16.7426842 C7.13218971,16.2260343 7.36226034,15.987891 7.83854692,15.8587286 C9.01311806,15.5438951 10.1796165,15.2048436 11.346115,14.8698285 C12.0807265,14.6639758 12.1533804,14.6881937 12.5166498,15.3420787 C13.2795156,16.7023209 14.0787084,18.0464178 14.7769929,19.4429869 C15.1564077,20.209889 15.6609485,20.5045409 16.4924319,20.4157417 C17.1019173,20.3511604 17.1503532,20.3430878 16.9848638,19.7336024 C16.4399596,17.7598385 15.8829465,15.7860747 15.3501514,13.8123108 L15.3501514,13.8123108 Z M15.2330979,6.27245207 C14.8536831,5.23107972 14.3047427,4.66195762 13.1786075,4.55297679 C12.4601413,4.48435923 11.7618567,4.19374369 11.0514632,4 L10.8335015,4 C10.7366297,4.21392533 10.6195762,4.419778 10.5469223,4.63773966 C10.1392533,5.86074672 9.75983855,7.09182644 9.34006054,8.30676085 C9.18264379,8.75882947 9.28355197,9.04944501 9.66700303,9.32795156 C10.728557,10.1150353 11.7941473,10.9061554 12.815338,11.7497477 C14.4500505,12.7386478 15.0554995,12.7386478 15.790111,12.7346115 C16.5247225,12.7305752 17.1099899,12.7346115 17.8486377,12.7346115 C17.7558022,12.4722503 17.6992936,12.2865792 17.6266398,12.1089808 C16.8193744,10.1675076 15.9475277,8.25025227 15.2330979,6.27245207 L15.2330979,6.27245207 Z M11.4470232,15.4510595 C11.160444,15.4873865 10.7891019,15.5035318 10.764884,15.987891 C10.7124117,17.0696266 10.6155399,18.1513623 10.530777,19.3420787 C10.5509586,19.592331 10.4581231,20.1210898 10.6437941,20.2542886 C10.9182644,20.443996 11.4026236,20.407669 11.7820383,20.3551968 C11.9354188,20.3350151 12.1210898,20.0484359 12.1735621,19.8466196 C12.3148335,19.3259334 12.3269425,18.764884 12.5005045,18.2563068 C12.8193744,17.3118063 12.6215943,16.4803229 12.0484359,15.7255298 C11.9273461,15.5640767 11.6367306,15.4268416 11.4470232,15.4510595 L11.4470232,15.4510595 Z M24,15.7255298 C23.9071645,15.160444 23.8546922,14.6437941 23.7255298,14.1473259 C23.6932392,14.0221998 23.4349142,13.9091826 23.2653885,13.889001 C23.1564077,13.8728557 22.9465187,14.0020182 22.9061554,14.110999 C22.6195762,14.8617558 23.0958628,15.6165489 24,15.7255298 L24,15.7255298 Z' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformHorton';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];
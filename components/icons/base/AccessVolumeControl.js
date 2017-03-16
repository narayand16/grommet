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


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-access-volume-control', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'access-volume-control');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { stroke: 'none', fill: '#000000', fillRule: 'evenodd', d: 'M12.6475791,6.60028348 C12.6230656,6.24997396 12.5153682,5.86532744 12.3335893,5.50663645 C12.2246302,5.29160211 12.1231513,4.95336912 11.7878924,5.15821953 C11.5487951,5.3043095 11.1658609,5.45625749 11.3635916,5.87244719 C11.6290049,6.43112192 11.5949382,6.95915471 11.3527768,7.52206525 C11.1817226,7.91977965 11.5742099,8.07416097 11.8261948,8.21340157 C12.1190056,8.37517301 12.215708,8.07452147 12.3136721,7.88472166 C12.5114929,7.50133687 12.6376656,7.09298791 12.6475791,6.60028348 M15.1758099,6.55341933 C15.1769815,5.77727692 14.9215719,4.75762117 14.2686281,3.86945542 C14.0959517,3.63450381 13.989516,3.1445932 13.5008672,3.50733974 C13.1342453,3.7795123 13.1135169,4.02311576 13.3720809,4.43119435 C14.3761453,6.01565321 14.3794798,7.62958242 13.3234142,9.19799932 C13.0646701,9.58237547 13.1413651,9.79281353 13.4805894,10.043717 C13.8948865,10.3500463 14.0521518,10.0144269 14.2239269,9.77289626 C14.8401003,8.90617987 15.1530087,7.93365865 15.1758099,6.55341933 M17.7290949,7.02485465 C17.7097184,5.14560226 17.1704202,3.56168413 16.1010163,2.16855717 C15.9316745,1.9480253 15.827582,1.44522705 15.3257752,1.82014025 C14.8994916,2.13854609 14.9432015,2.36872116 15.2492604,2.78752444 C17.1379758,5.37244276 17.1151745,8.49602844 15.2069024,11.0600382 C14.9578916,11.3945761 14.8610991,11.5879808 15.2206012,11.9057558 C15.6358896,12.2728283 15.8081154,11.997231 16.0333337,11.7099177 C17.139598,10.2985858 17.6879986,8.69448009 17.7290949,7.02485465 M7.95918149,21.0769797 C7.95918149,21.7372235 7.9434099,22.3980981 7.96512964,23.0576209 C7.97792715,23.4472242 7.77920514,24.0011224 8.49902044,23.9865224 C9.16340988,23.973094 10.0743768,24.1972308 10.1557582,23.2300269 C10.2755322,21.8061678 10.277605,20.3546409 10.1408879,18.933035 C10.046709,17.9537545 9.10969636,18.2497196 8.46080814,18.2276394 C7.79533722,18.2049283 7.97702592,18.7337722 7.96540001,19.0963385 C7.94422102,19.7559514 7.95936174,20.4167359 7.95918149,21.0769797 M10.2038841,6.89606836 L10.1984767,6.89606836 C10.1984767,6.20437154 10.2481347,5.50825867 10.1868508,4.82205938 C10.0954657,3.79870858 9.28363445,4.00067504 8.60653762,3.95858743 C7.85436802,3.91172328 7.95873088,4.41731535 7.95891112,4.87487167 C7.95945186,6.17192713 7.96287655,7.46889246 7.95737903,8.76594792 C7.95530619,9.26577209 7.8778001,9.73666667 8.66367583,9.72612224 C9.79292158,9.71089139 10.1469262,9.56696438 10.1956829,8.79776146 C10.2357878,8.16626705 10.2038841,7.53017635 10.2038841,6.89606836 M19.1901749,6.94933127 C19.185128,9.18943761 18.5161422,11.2032442 17.0454191,12.9062153 C16.5849788,13.439295 16.8178576,13.7770773 17.268204,13.9744475 C17.6719567,14.1514498 17.8298528,13.6538787 18.0244292,13.4142407 C21.0915976,9.63870258 21.0049891,4.04249228 17.8428306,0.338782509 C17.6308604,0.090492641 17.4653939,-0.177714491 17.0860647,0.15637282 C16.7240391,0.475229282 16.7342231,0.687740175 17.0476721,1.06806077 C18.4488201,2.76841828 19.1986465,4.72418541 19.1901749,6.94933127 M7.59012632,6.89597824 C7.59012632,6.14696296 7.56011524,5.39632546 7.59868804,4.64929289 C7.63608923,3.92343932 7.31128463,3.86323691 6.76946296,4.12558602 C5.47880627,4.7507718 4.68905523,5.83387439 4.14894591,7.108399 C3.1865185,9.37950778 2.97680143,11.779493 3.00194585,14.2155275 C3.028352,16.7703446 3.28772704,19.2770359 4.52512083,21.5772545 C5.03936474,22.5333733 5.72592453,23.3419601 6.73692843,23.8069065 C7.22999335,24.0336569 7.61734357,24.0726803 7.60022013,23.3027564 C7.56750535,21.8341962 7.5939115,20.3642841 7.58724237,18.8950029 C7.58607077,18.6489661 7.66429785,18.3474134 7.33498707,18.228811 C6.74702225,18.0170211 6.62084954,17.4798859 6.53342987,16.9842975 C6.18023641,14.9834687 6.17654135,12.9733572 6.51531508,10.9677518 C6.57795082,10.5968942 6.65996308,10.1172576 6.98170349,9.98180222 C7.71584841,9.67267908 7.58435842,9.09679079 7.58931521,8.53820618 C7.59427199,7.99088699 7.59039669,7.44338755 7.59012632,6.89597824' })
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

Icon.displayName = 'AccessVolumeControl';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];
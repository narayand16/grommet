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


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-java', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-java');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { stroke: 'none', fill: '#000000', fillRule: 'evenodd', d: 'M9.58411114,23.9245755 C13.9059831,24.2012056 20.5433377,23.7709763 20.7003474,21.7260608 C20.7003474,21.7260608 20.3983279,22.5012567 17.128282,23.116664 C13.4395014,23.8108919 8.88963059,23.7300502 6.19103426,23.2849157 C6.19103426,23.2849157 6.74353662,23.7424291 9.58411114,23.9245755 M14.2515813,0.000111961144 C15.2576813,3.96274374 10.7046526,5.15894797 9.06104021,7.62676656 C7.94125663,9.30814718 9.610511,11.1145798 11.8850675,13.1666953 C10.9980826,11.1620743 7.9902669,9.40755719 11.8864569,6.33064706 C16.7452945,2.49458304 14.2515813,0.000111961144 14.2515813,0.000111961144 M16.966346,17.5843141 C16.945504,17.6397665 16.875778,17.7021662 16.875778,17.7021662 C22.8893885,16.1213324 20.6786212,12.1297744 17.8039416,13.1402954 C17.5514376,13.2299792 17.4191857,13.4372623 17.4191857,13.4372623 C17.4191857,13.4372623 17.5777112,13.3728416 17.9344251,13.2985683 C19.3873017,12.9959172 21.4692275,15.2443265 16.966346,17.5843141 M9.14137663,13.2105266 C9.14137663,13.2105266 7.44749081,13.0960851 5.3645544,14.1033219 C2.90090421,15.2948525 11.4577434,15.8368707 15.8872359,14.6718663 C16.3479071,14.3573417 16.984409,14.0847536 16.984409,14.0847536 C16.984409,14.0847536 15.1715344,14.4086256 13.3663649,14.5608353 C11.1578713,14.745887 8.78655745,14.7818868 7.59704792,14.6226034 C4.77971538,14.246437 9.14137663,13.2105266 9.14137663,13.2105266 M19.1800185,20.5038356 C19.1800185,20.5038356 19.8589623,21.0630327 18.4326119,21.4960409 C15.7206262,22.3174682 7.14534503,22.5655511 4.76329441,21.5286302 C3.90713049,21.1560006 5.51272204,20.6391191 6.01823517,20.5306144 C6.54496924,20.4166782 6.84585187,20.4376465 6.84585187,20.4376465 C5.89343583,19.7669132 0.690515845,21.7549869 4.20296052,22.3241629 C13.7821943,23.8778389 21.6648897,21.6248824 19.1800185,20.5038356 M12.9663249,11.4757147 C14.1241294,12.8084656 12.6621581,14.007954 12.6621581,14.007954 C12.6621581,14.007954 15.6017637,12.4904041 14.2515813,10.5899931 C12.9908301,8.8180445 12.0241404,7.93762808 17.2585129,4.90177037 C17.2585129,4.90177037 9.04221926,6.95388589 12.9663249,11.4757147 M8.12630829,15.9329965 C4.06123495,17.2820421 10.3879806,18.8119708 16.0686244,17.1511796 C15.4649644,16.938086 15.0810927,16.5491617 15.0810927,16.5491617 C12.30456,17.0834747 10.7003579,17.0664221 8.66883175,16.8569917 C7.09772423,16.6941715 8.12630829,15.9329965 8.12630829,15.9329965 M8.70053685,18.5603511 C8.70053685,18.5603511 7.78336272,19.0937799 9.35333341,19.2744105 C11.2550076,19.4911673 12.2271288,19.4602201 14.3229494,19.0634643 C14.3229494,19.0634643 14.8736833,19.4089361 15.6434477,19.7080503 C10.9451566,21.7217661 5.01011416,19.5915878 8.70053685,18.5603511' })
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

Icon.displayName = 'PlatformJava';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Tabs = function (_PureComponent) {
  _inherits(Tabs, _PureComponent);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'renderTabs',
    value: function renderTabs() {
      var _this2 = this;

      var tabs = this.props.tabs.map(function (tab) {
        return _react2.default.createElement(_tab2.default, {
          key: tab.value,
          label: tab.label,
          onClick: function onClick() {
            return _this2.props.onClickTab(tab);
          },
          active: _this2.props.activeTab === tab.value
        });
      });
      return tabs;
    }
  }, {
    key: 'render',
    value: function render() {
      var tabsClassNames = (0, _classnames2.default)({
        'bs-ui-tabs': true,
        'bs-ui-tabs--small': this.props.small,
        'bs-ui-tabs--large': this.props.large
      }, this.props.className);
      return _react2.default.createElement(
        'ul',
        { className: tabsClassNames },
        this.renderTabs()
      );
    }
  }]);

  return Tabs;
}(_react.PureComponent);

exports.default = Tabs;


Tabs.propTypes = {
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  })).isRequired,
  activeTab: _propTypes2.default.string.isRequired,

  className: _propTypes2.default.string,
  small: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  onClickTab: _propTypes2.default.func
};

Tabs.defaultProps = {
  className: '',
  small: false,
  large: false,
  onClickTab: function onClickTab() {}
};
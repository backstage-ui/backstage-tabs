/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tab from './tab';

export default class Tabs extends PureComponent {
  renderTabs() {
    const tabs = this.props.tabs.map(tab => (
      <Tab
        key={tab.value}
        label={tab.label}
        onClick={() => this.props.onClickTab(tab)}
        active={this.props.activeTab === tab.value}
      />
    ));
    return tabs;
  }

  render() {
    const tabsClassNames = classNames({
      'bs-ui-tabs': true,
      'bs-ui-tabs--small': this.props.small,
      'bs-ui-tabs--large': this.props.large,
    }, this.props.className);
    return (
      <ul className={tabsClassNames}>
        { this.renderTabs() }
      </ul>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  activeTab: PropTypes.string.isRequired,

  className: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  onClickTab: PropTypes.func,
};

Tabs.defaultProps = {
  className: '',
  small: false,
  large: false,
  onClickTab: () => {},
};

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tab extends PureComponent {
  render() {
    const tabClassNames = classNames({
      'bs-ui-tabs__tab': true,
      'bs-ui-tabs__tab--active': this.props.active,
    });

    return (
      <li className={tabClassNames} onClick={this.props.onClick}>
        {this.props.label}
      </li>
    );
  }
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

Tab.defaultProps = {
  label: '',
  onClick: () => {},
  active: false,
};

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from '../src/tabs';

const OPTIONS = [
  { value: 'grape', label: 'Grape' },
  { value: 'apple', label: 'Apple' },
  { value: 'mango', label: 'Mango' },
  { value: 'tangerine', label: 'Tangerine' },
];

const SIZES = [
  'large',
  'regular',
  'small',
];

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: OPTIONS[0].value,
      selectedSize: SIZES[0],
    };

    this.onClickTab = ::this.onClickTab;
    this.onCheckSizeRadio = ::this.onCheckSizeRadio;
  }

  onClickTab(tabData) {
    this.setState({
      activeTab: tabData.value,
    });
  }

  onCheckSizeRadio(selectedSize) {
    this.setState({
      selectedSize,
    });
  }

  renderRadio(option) {
    return (
      <span key={option}>
        <input
          type="radio"
          value={option}
          onChange={() => this.onCheckSizeRadio(option)}
          checked={this.state.selectedSize === option}
        /> {option}
      </span>
    );
  }

  renderSizeOptions() {
    let radios = [];
    radios = SIZES.map(size => this.renderRadio(size));
    return (
      <div className="modes">
        { radios }
      </div>
    );
  }

  render() {
    return (
      <div>
        <header className="heading"><h1>Backstage Tabs Demo</h1></header>

        <div className="content">
          { this.renderSizeOptions() }
          <Tabs
            tabs={OPTIONS} activeTab={this.state.activeTab}
            onClickTab={this.onClickTab} small={this.state.selectedSize === 'small'}
            large={this.state.selectedSize === 'large'}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));

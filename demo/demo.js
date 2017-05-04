/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <header className="heading"><h1>Backstage Tabs Demo</h1></header>

        <div className="content">
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));

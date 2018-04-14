import React, { Component } from 'react';

import Header from './_common/header';
import Features from './home/features';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
      </div>
    );
  }
}

export default App;

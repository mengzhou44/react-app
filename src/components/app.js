import React, { Component } from 'react';

import Header from './_common/header';
import Features from './home/features';
import Meals from './home/meals';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <Meals />
      </div>
    );
  }
}

export default App;

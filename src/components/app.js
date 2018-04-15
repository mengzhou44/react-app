import React, { Component } from 'react';

import Header from './_common/header';
import Footer from './_common/footer';
import Features from './home/features';
import Meals from './home/meals';
import Steps from './home/steps';
import Cities from './home/cities';
import Testimonials from './home/testimonials';
import Plans from './home/plans';
import Form from './home/form';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <Meals />
        <Steps />
        <Cities />
        <Testimonials />
        <Plans />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;

/* @flow */

import React, { Component } from 'react';
import slides from './slides';

import Webflow from './resources/webflow.svg';

const Branded = () => (
  <div style={Branded.style} hidden>
    <Webflow height={36} width={'auto'}/>
  </div>
);
Branded.style = {color: '#fff', position: 'fixed', top: '1.5em', right: '1.5em', opacity: 0.6, zIndex: 100};

const LEFT = 37;
const RIGHT = 39;
// const UP = 38;
// const DOWN = 40;

class App extends Component {
  state = {
    ready: false,
    slide: -1,
    width: -1,
    height: -1,
  };

  componentDidMount() {
    // just giving the JS engine some time to flush
    setTimeout(() => {
      // 15 for scrollbar width
      const width = document.documentElement.clientWidth - 15; // || window.innerWidth || 0;
      const height = document.documentElement.clientHeight - 15; // || window.innerHeight || 0;
      this.setState({ready: true, width, height, slide: 0});
    }, 1000);
    document.addEventListener('keyup', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    switch (event.which) {
      case LEFT:
        if (this.state.slide < 1) return;
        return this.setState({slide: this.state.slide - 1});
      case RIGHT:
        if (this.state.slide >= slides.length - 1) return;
        return this.setState({slide: this.state.slide + 1});
      default:
        // do nothing, eslint
    }
  };

  render() {
    if (this.state.ready === false) {
      return <Branded />;
    }

    const Slide = slides[this.state.slide];

    return [
      <Branded />,
      <Slide
        width={this.state.width}
        height={this.state.height}
      />
    ];
  }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';

import Piano from './components/piano/Piano';

import 'bulma';
import './scss/style.scss';

import Navbar from './components/Navbar';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section className="section">
          <h1 className="title has-text-centered">TonaraPiano </h1>
          <Piano />
        </section>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

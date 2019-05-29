import React, { Component } from 'react';
import './App.css';
import FxForm from './components/form.js';
import Main from './components/main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Main></Main>
        <FxForm></FxForm>
      </div>
    );
  }
}

export default App;

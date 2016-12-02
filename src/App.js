import React, { Component, PropTypes as RPT } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { changeText } from './redux/actions';

class App extends Component {

  static propTypes = {
    changeText: RPT.func,
    email: RPT.string,
    password: RPT.string
  }

  onChange({ name, value }) {
    const { changeText } = this.props;
    changeText({ name, value });
  }

  render() {
    const { email, password } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {email}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input name="email" onChange={(e) => this.onChange(e.target)} value={email} />
        <input name="password" onChange={(e) => this.onChange(e.target)} value={password} />
      </div>
    );
  }
}

export default connect(state => ({
  email: state.myReducer.email,
  password: state.myReducer.password
}), { changeText })(App);

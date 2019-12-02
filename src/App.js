import React from 'react';
import ScrollBar from './components/ScrollBar/ScrollBar';
import Content from './components/Content/Content';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import './App.css';

import { connect } from 'react-redux';

function App(props) {
  const login = () => {
    props.dispatch({
      type: "LOGIN"
    });
  }

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh"
  }

  return !props.logged ? (
    // <div class="row">
    //   <ScrollBar />
    //   <Content />
    //   <Nav />
    // </div>
    <div style={styles}>
        <Login login={login} />
    </div>
  ) : (
<div class="row">
      <ScrollBar />
      <Content />
      <Nav />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    logged: state.logged
  }
}

export default connect(mapStateToProps)(App);
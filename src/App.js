import React from 'react';
import ScrollBar from './components/ScrollBar/ScrollBar';
import Content from './components/Content/Content';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <div class="row">
      <ScrollBar />
      <Content />
      <Nav />
    </div>
    // <div className="container d-flex justify-content-center align-items-center app_wrapper">
    //   <div className="col-md-4">
    //     <Login />
    //   </div>
    // </div>
  );
}

export default App;

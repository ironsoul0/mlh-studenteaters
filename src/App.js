import React from 'react';
import ScrollBar from './components/ScrollBar/ScrollBar';
import Content from './components/Content/Content';
import Nav from './components/Nav/Nav';
import './App.css';

function App() {
  return (
    <div class="row App">
      <ScrollBar />
      <Content />
      <Nav />
    </div>
  );
}

export default App;

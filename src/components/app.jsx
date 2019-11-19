import React from 'react';
import './app.scss';
import Main from './main/main';
import Nav from './nav/nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
    </div>
  );
}

export default App;

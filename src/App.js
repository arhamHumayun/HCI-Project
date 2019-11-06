import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Header/>
      Tabletop Group Finder App
      <Main/>
    </div>
  );
}

export default App;

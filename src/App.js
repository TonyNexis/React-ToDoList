import {Component} from 'react';
import './App.css';


let num = 3;

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className='App-header' >Hello world</header>
      <p>Today we will study React in {num > 5 ? num : 'some'} days</p>
    </div>
  );
}

export default App;

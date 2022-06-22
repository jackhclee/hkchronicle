import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const a = async () => {  
    try {
      let response = await fetch('https://orientalpearl.herokuapp.com/books');
      let json = await response.json();
      console.log('Data from backend')
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  }
  a()
  });


  return (
    <div className="App">
      <header className="App-header">
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
          Learn React!
        </a>
      </header>
    </div>
  );
}

export default App;

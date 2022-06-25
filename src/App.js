//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Book from './Book'

function App() {

  const [books, setBooks ] = useState([])
  const [photoUrl , setPhotoUrl] = useState("https://images.unsplash.com/photo-1449280429541-0214e229317b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDAzMzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU5Mzg1MTA&ixlib=rb-1.2.1&q=80&w=1080")
  
  useEffect(() => {
    const a = async () => {
      try {
        let response = await fetch('https://orientalpearl.herokuapp.com/books');
        let json = await response.json();
        console.log('Data from backend')
        console.log(json);
        setBooks(json)
      } catch (e) {
        console.log(e);
      }
    }
    const getPhoto = async () => {
      try {
        let response = await fetch('https://api.unsplash.com/photos/random?query=hong kong&client_id=nIG-A-k1Uur9_IPO0kCFAcMMJcs8VVuSEeqpQ7uWl8A&orientation=landscape');
        let json = await response.json();
        setPhotoUrl(json.urls.regular)
      } catch (e) {
        console.log(e);
      }
    }
    a()
    getPhoto();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={photoUrl} className="App-logo" alt="logo" />
        <p>
         Hong Kong, once the world's finest city.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Book books={books} />
      </header>
      <div>image from unsplash</div>
    </div>
  );
}

export default App;

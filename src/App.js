import logo from './logo.svg';
import React, {useEffect} from 'react'
import './App.css';

function App() {
  console.log('initial')
  useEffect(() => {
    async function getCompanyReviews() {
      console.log('we getting this')
      try{
        const reviewsRes = await fetch('http://localhost:8000/api/v1/reviews')
        const reviewsJson = await reviewsRes.json()
        console.log(reviewsJson)
        // setUserReviews(reviewsJson.data)
      } catch(err) {
        console.log(err);
      }
    }
    getCompanyReviews()
  }, [])
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

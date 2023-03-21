import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import React, { useState, useEffect } from 'react'

function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

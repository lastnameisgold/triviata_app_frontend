import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Home from "./components/Home"
import Create from './components/Create'
import Bookmarks from './components/Bookmarks'
import Profile from './components/Profile'
import SignIn from './components/SignIn'
import Register from './components/Register'
import UpdateUser from './components/UpdateUser'
import CreateFlashCards from './components/CreateFlashcards';
import React, { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  })

  console.log(user)

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
            <Route path="/" element={<Home user={user} authenticated={authenticated} />}/>

            <Route path="/create" element={<Create />}/>

            <Route path="/bookmarks" element={<Bookmarks />}/>

            <Route path="/profile" element=
                {<Profile 
                    user={user} 
                    authenticated={authenticated}
                />} />

            <Route path="/signin" element=
                {<SignIn 
                    user={user} 
                    setUser={setUser}
                    toggleAuthenticated={toggleAuthenticated}
                />}/>
            <Route path="/updateUser" element=
                {<UpdateUser 
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />}/>
            <Route path="/register" element={<Register />}/>
            
            <Route path="/CreateFlashCards" element={<CreateFlashCards />}/>


          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

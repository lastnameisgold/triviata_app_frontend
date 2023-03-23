import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from "./Home"
import Create from './Create'
import Bookmarks from './Bookmarks'
import Profile from './Profile'
import SignIn from './SignIn'
import Register from './Register'
import EditUser from './UpdateUser'
// import { CheckSession } from './services/Auth'

export default function Main() {

    const [authenticated, toggleAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    //Used to allow persistant logging in - Not currently working
        // const checkToken = async () => {
        //     const user = await CheckSession()
        //     setUser(user)
        //     toggleAuthenticated(true)
        //   }
        
        // useEffect(()=> {
        //     const token = localStorage.getItem('token')
        //     if (token) {
        //         checkToken()
        //     }
        // }, [])


    return(
        <div className='main'>
            <Routes>
                <Route path="/" element={<Home />}/>

                <Route path="/create" element={<Create />}/>

                <Route path="/bookmarks" element={<Bookmarks />}/>

                <Route path="/profile" element=
                    {<Profile 
                        user={user} 
                        authenticated={authenticated}
                    />} />

                <Route path="/signin" element=
                    {<SignIn 
                        setUser={setUser}
                        toggleAuthenticated={toggleAuthenticated}
                    />}/>

                <Route path="/register" element={<Register />}/>

                <Route path="/updateUser" element=
                    {<EditUser 
                        user={user} 
                        authenticated={authenticated}/>
                    }/>

            </Routes>
        </div>
    )
}

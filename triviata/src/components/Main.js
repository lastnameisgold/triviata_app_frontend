import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Create from './Create'
import Bookmarks from './Bookmarks'
import Profile from './Profile'
import SignIn from './SignIn'
import Register from './Register'

export default function Main() {
    return(
        <div className='main'>
            <Routes>
                <Route path="/" element={<Home />}/>

                <Route path="/create" element={<Create />}/>

                <Route path="/bookmarks" element={<Bookmarks />}/>

                <Route path="/profile" element={<Profile />} />

                <Route path="/signin" element={<SignIn />}/>

                <Route path="/register" element={<Register />}/>

            </Routes>
        </div>
    )
}
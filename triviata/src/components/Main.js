import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Create from './Create'
import Bookmarks from './Bookmarks'
import Profile from './Profile'

export default function Main() {
    return(
        <div className='main'>
            <Routes>
                <Route path="/" element={<Home />}/>

                <Route path="/create" element={<Create />}/>

                <Route path="/bookmarks" element={<Bookmarks />}/>

                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}
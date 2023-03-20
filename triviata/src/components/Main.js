import { Routes, Route } from 'react-router-dom'

import Home from "./Home"

export default function Main() {
    return(
        <div className='main'>
            <Routes>
                <Route path="/" element={<Home />}/>

            </Routes>
        </div>
    )
}
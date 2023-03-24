//Need to update to protect page to allow only logged in users to acces -AH

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetUsers } from '../services/UserServices'

export default function Profile({user, authenticated}) {
    let navigate = useNavigate()
    const [userProfile, setUserProfile] = useState({})
    
    const NavigateToUpdate = () => {
        navigate('/updateUser')
    }

    
    return(
        <div className='profile-container'>
            
            <div className='general-Info' >
                <h4>NAME: </h4>
                <h3>{user.name}</h3>
                <h4>EMAIL: </h4>
                <h3>{user.email}</h3>

    
                
            </div>
            <div className='about'> 
                <h4>ABOUT</h4>
                <p>Sup, I'm Jon Snow, a guy who knows a thing or two about surviving in tough situations. Born as an illegitimate son, I've learned to be resourceful and make the best of what I have. Currently, I'm the Lord Commander of the Night's Watch, but when I'm not defending the realm against wildlings and white walkers, you can find me exploring new places and trying new things. Looking for someone who shares my sense of adventure and doesn't mind a bit of danger.</p>
            </div>
            <button onClick={NavigateToUpdate}>Edit Profile</button>
        </div>
    )
}
//Need to update to protect page to allow only logged in users to acces -AH

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetUsers } from '../services/UserServices'

export default function Profile({user, authenticated}) {
    let navigate = useNavigate()
    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        const handleUser = async () => {
            const data = await GetUsers()
            setUserProfile(data[0])
            console.log(data[0])
            console.log(userProfile)
        }
        handleUser()
    },[])    
    
    const NavigateToEdit = () => {
        navigate('/updateUser')
    }

    
    return(
        <div >
            <h3>This is the Profile component</h3>
            <div >
                <h3>Name: {userProfile.name}</h3>
                <h3>Email: {userProfile.email}</h3>
                <button onClick={NavigateToEdit}>Edit</button>
                
            </div>
        </div>
    )
}
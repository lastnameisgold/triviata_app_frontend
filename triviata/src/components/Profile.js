//Need to update to protect page to allow only logged in users to acces -AH

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetUsers } from '../services/UserServices'

export default function Profile({user, authenticated}) {
    let navigate = useNavigate()
    const [userProfile, setUserProfile] = useState({})

    // useEffect(() => {
    //     const handleUser = async () => {
    //         const data = await GetUsers()
    //         setUserProfile(data[0])
    //         console.log(data[0])
    //         console.log(userProfile)
    //     }
    //     handleUser()
    // },[])

    console.log(user)
   
    
    const NavigateToEdit = () => {
        navigate('/updateUser')
    }

    
    return(
        <div >
            <h3>This is the Profile component</h3>
            <div >
                <h3>Name: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <h3>id: {user.id}</h3>

                <h3>password: {user.passwordDigest}</h3>
                <button>Edit</button>

            </div>
        </div>
    )
}
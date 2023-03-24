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


        <div className="profile-container">

            <div className='profile-top-section'>

                <img className="profile-image" src="https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=1200:*" alt="Profile" />

                <div className='personal-details-container'>
                    <div>
                        <h6>Name</h6>
                        <h3>{user.name}</h3>
                        {/* <h3>{user.name}</h3> */}
                    </div>

                    <div>
                        <h6>Email</h6>
                        <h3>{user.email}</h3>
                        {/* <h3>{user.email}</h3> */}
                    </div>

                </div>

                <div className='about-container'>
                    <h6>About</h6>
                    <p>Sup, I'm Jon Snow, a guy who knows a thing or two about surviving in tough situations. Born as an illegitimate son, I've learned to be resourceful and make the best of what I have. Currently, I'm the Lord Commander of the Night's Watch, but when I'm not defending the realm against wildlings and white walkers, you can find me exploring new places and trying new things. Looking for someone who shares my sense of adventure and doesn't mind a bit of danger.</p>
                </div>

                <button className="secondary-button" onClick={NavigateToUpdate}>
                <span class="material-symbols-rounded">edit</span>
                Edit</button>

            </div>

            <div className='contributions-container'>

                <h3>Contributions</h3>

                <div className='contribution-cards-container'>

                    <div className='contribution-card'>
                        <div>
                            <h6>Flashcards created</h6>
                            <h2>32</h2>
                        </div>
                        <span class="material-symbols-rounded">chevron_right</span>
                    </div>

                    <div className='contribution-card'>
                        <div>
                            <h6>Quizzes created</h6>
                            <h2>47</h2>
                        </div>
                        <span class="material-symbols-rounded">chevron_right</span>
                    </div>

                    <div className='contribution-card'>
                        <div>
                            <h6>Questions created</h6>
                            <h2>189</h2>
                        </div>
                        <span class="material-symbols-rounded">chevron_right</span>
                    </div>

                </div>

            </div>

            <div className='stats-container'>

                <h3>Stats</h3>

                <div className='stats-cards-container'>

                    <div className='stats-card'>
                        <h6>Top 3 categories</h6>
                        <h2>Game of Thrones</h2>
                        <h2>Pop Culture</h2>
                        <h2>Harry Potter</h2>
                    </div>

                    <div className='stats-card'>
                        <h6>Average score</h6>
                        <h2>8.2</h2>
                    </div>

                </div>
            </div>


        </div>
    )
}
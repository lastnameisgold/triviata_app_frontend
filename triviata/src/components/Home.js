import Card from "./Card"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"

export default function Home({ user, authenticated }) {
    let navigate = useNavigate()

    const navigateToRegister = () => {
        navigate('/register')
    }
    // const [quizzes, setQuizzes] = useState([])

    return(user && authenticated) ? (
        <div className="home-container">
            <div className="section-container">
                <h3>Trending</h3>
                <div className="card-grid">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="section-container">
                <h3>My Quizzes</h3>
                <div className="card-grid">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="section-container">
                <h3>My Flashcards</h3>
                <div className="card-grid">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    ) : (
        <div className="home-signedout-container">

            <div className="hero-container">
                <div className="hero-content-container">
                    <h1>Ignite Your Curiosity: Discover, Learn, and Quiz!</h1>
                    <p>Discover a world of knowledge, ignite your curiosity, and enhance your learning journey with engaging quizzes and interactive flashcards.</p>
                </div>
                <button className="primary-button" onClick={navigateToRegister}>Sign up for free</button>
            </div>
            <div className="features-section">
                <div className="feature-section">
                    <img src="https://images.unsplash.com/photo-1573495783323-9e59a325d4b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="" />
                    <div className="feature-content">
                        <h3>Lorem ipsum dolor sit amet consectetur. Semper lectus morbi.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Aliquet turpis in a nullam et. In ultrices risus pellentesque sapien turpis velit consectetur tempus.</p>
                        <button className="primary-button" onClick={navigateToRegister}>Sign up for free</button>
                    </div>
                </div>

                <div className="feature-section">
                    <div className="feature-content">
                        <h3>Lorem ipsum dolor sit amet consectetur. Semper lectus morbi.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Aliquet turpis in a nullam et. In ultrices risus pellentesque sapien turpis velit consectetur tempus.</p>
                        <button className="primary-button" onClick={navigateToRegister}>Sign up for free</button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1618557039181-a3b7e72beeda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="" />
                </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"

export default function Nav() {
    return(
        <div className="nav-container">
            <Link to="/">
                <h1>Triviata</h1>
            </Link>
            
            <div className="search-bar">
                <span className="material-symbols-rounded">search</span>
                <input className="search-input" placeholder="Search for quizzes, flashcards, topics"/>
            </div>

            <div className="links-container">
                <Link to="/create">
                    <button className="create-button">
                    <span class="material-symbols-rounded">add</span>
                    Create
                    </button>
                </Link>
                <Link to="/bookmarks">
                    <span class="material-symbols-rounded">bookmark</span>
                </Link>
                <Link to="/profile">
                    <span class="material-symbols-rounded">account_circle</span>
                </Link>

            </div>
        </div>
    )
}
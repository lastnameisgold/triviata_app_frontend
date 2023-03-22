import { Link } from "react-router-dom"

const Nav = ({authenticated, user, handleLogOut}) => {
    let authenticatedOptions
    if (user) {
        authenticatedOptions=(
            <nav>
            <h3>Welcome {user.email}!</h3>
            <Link to="/feed">Feed</Link>
            <Link onClick={handleLogOut} to="/">
              Sign Out
            </Link>
          </nav>
        )
    }

    const publicOptions = (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/signin">Sign In</Link>
        </nav>
      )

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

                {/* For testing purposes! Feel free to change link design for register */}

                <Link to="/signin">
                    <h3>Sign In</h3>
                </Link>
                <Link to="/register">
                    <h3>Register</h3>
                </Link>
            </div>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </div>
    )
}

export default Nav
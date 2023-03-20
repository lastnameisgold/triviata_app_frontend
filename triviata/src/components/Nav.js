import { Link } from "react-router-dom"

export default function Nav() {
    return(
        <div className="nav-container">
            <Link to="/">
                <h2>Triviata</h2>
            </Link>

            <input placeholder="Search for something"/>

            <div className="links-container">
                <Link to="/create">Create</Link>
                <Link to="/bookmarks">Bookmarks</Link>
                <Link to="/profile"> Profile</Link>

            </div>
        </div>
    )
}
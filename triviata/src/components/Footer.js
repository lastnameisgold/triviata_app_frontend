export default function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-grid">
                <div className="footer-column">
                    <h3>About the project</h3>
                    <p>Triviata is a ReactJS app designed and built by Charlotte Fusco, Jose Reyes, Austin Holland, and Fernando Dorado...</p>
                </div>

                <div className="footer-column">
                    <h3>Link and resources</h3>
                    <ul>
                        <li>Frontend GitHub repo</li>
                        <li>Backend GitHub repo</li>
                        <li>Material Theme Builder</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Get in touch</h3>
                    <p>Report a bug, send feedback, say hello!</p>
                    <h5>triviata@gmail.com</h5>
                </div>
            </div>
            <p>Copyright © 2023 Triviata. All rights reserved.</p>
        </div>
    )
}
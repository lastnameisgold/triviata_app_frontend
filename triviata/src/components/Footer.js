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
                        <li> <a className="hyperlink" href="https://github.com/lastnameisgold/triviata_app_frontend" target="_blank" style={{textDecoration:'none', color: 'var(--md-sys-color-on-background)'}}>Frontend GitHub repo</a></li>
                        <li><a href="https://github.com/lastnameisgold/triviata_app_backend" target="_blank" style={{textDecoration:'none', color: 'var(--md-sys-color-on-background)'}}>Backend GitHub repo</a></li>
                        <li><a href="https://m3.material.io/theme-builder#/dynamic" target="_blank" style={{textDecoration:'none', color: 'var(--md-sys-color-on-background)'}}>Material Theme Builder</a></li>
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
export default function Card() {
    return(
        <div className="card-container">
            <div className="content-container">
                <h3>Title goes here</h3>
                <h5>10 questions</h5>
            </div>

            <div className="creator-container">
                <img src="https://i.pravatar.cc/48" className="creator-image-container" alt="Creator" />
                <h5>First and Last Name</h5>
            </div>
        </div>
    )
}
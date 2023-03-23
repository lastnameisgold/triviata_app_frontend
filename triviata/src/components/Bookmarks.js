import Card from "./Card"

export default function Bookmarks() {
    return(
        <div className="home-container">
            <div className="section-container">
            <h3>Bookmarks</h3>
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
    )
}
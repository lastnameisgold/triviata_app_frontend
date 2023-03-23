import Card from "./Card"

export default function Home() {
    return(
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
    )
}
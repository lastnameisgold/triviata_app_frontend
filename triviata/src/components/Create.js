import CreateFlashcards from './CreateFlashcards'
export default function Create() {
    return(
        <div className="create-container">
            <h2>What would you like to create?</h2>
            <div className="create-options-container">
                <div className="create-option"><h3>Create quiz</h3></div>
                <div className="create-option"><h3>Create flashcards</h3></div>
            </div>
        </div>
    )
}
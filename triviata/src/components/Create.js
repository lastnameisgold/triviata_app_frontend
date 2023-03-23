import { useNavigate } from 'react-router-dom'
export default function Create() {
    let nav = useNavigate()


    const goToQuiz = ()=>{
        nav('/Quiz')
    }
    const goToFlash = ()=>{
        nav('/CreateFlashCards')
    }
    

    return(
        <div className="create-container">
            <h2>What would you like to create?</h2>
            <div className="create-options-container">
                <div className="create-option" onClick={goToQuiz}><h3>Create quiz</h3></div>
                <div className="create-option" onClick={goToFlash}><h3>Create flashcards</h3></div>
            </div>

        </div>
    )
}
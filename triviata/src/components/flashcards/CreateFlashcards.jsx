import CreateDescription from "../create/create_quiz/CreateDescription"
import CreateTitle from "../create/create_quiz/CreateTitle"
export default function CreateFlashCards(){
  return(
    <div className="create-flashcards-container"> 
      <CreateTitle/>
      <CreateDescription/>
      <div className="create-tiles-container">
        <div className="tiles-container">
          <div className="tiles-inner-container">
            <div className="term-def-container">
              <input className="term-container">

              </input>
              <input className="def-container">

              </input>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
  
}
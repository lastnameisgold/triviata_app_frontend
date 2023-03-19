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
            <div className="number-trash-container">
              <div className="number"><span>1</span></div>
              <div className="trash-can"><span>2</span></div>
            </div>
            <div className="term-def-container">
              <input className="term-container" placeholder="Term">

              </input>
              <input className="def-container" placeholder="Definition">

              </input>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
  
}
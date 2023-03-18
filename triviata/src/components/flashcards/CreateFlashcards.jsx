import { useState } from "react"
export default function CreateFlashcards (){


const[hidden,setHidden] = useState('false')
const showDef = ()=>{
setHidden(!hidden)
}


  return(
  <div className="flashcards-container" onClick={showDef}>
    <div className="flashcards">

      <div className="flashcards-term" hidden={hidden? true:false}>
          <div className="flashcards-inner-container">
            <div className="flashcard-number"><span>1/24</span></div>{/* change with state*/}

            <div className="term-container"> {/*this can have a state to change the classname to display either term or definiotion based on click*/}
              <div className="term"><span>Cow Color</span></div>
            </div>

            <div className="prev-next-container">
              <div className="prev-card"><span>←</span></div>
              <div className="next-card"><span>→</span></div>
            </div>
          </div>
      </div>



      <div className="flashcards-definition" hidden={!hidden? true:false}> {/*this changes from hidden true to false and the classname changes to show on click it will flip*/}
        <div className="flashcards-inner-container">
          <div className="flashcard-number"><span>1/24</span></div>{/* change with state*/}
          
          <div className="term-container"> {/*this can have a state to change the classname to display either term or definiotion based on click*/}
            <div className="term"><span>Color of cow is white and black</span></div>
          </div>

          <div className="prev-next-container">
            <div className="prev-card"><span>←</span></div>
            <div className="next-card"><span>→</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
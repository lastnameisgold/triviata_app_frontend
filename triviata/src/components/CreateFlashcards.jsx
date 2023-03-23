import Client from '../services/api.js'
import { useEffect, useState, React } from 'react';
import axios from 'axios';
import { createElement } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import Flashcards from './Flashcards.jsx';
import { BASE_URL } from '../services/api.js';
import Description from "./Description.jsx"
import Title from "./Title.jsx"

/*potential issues
1. when refreshed the new divs created dont stay maybe use usestate
2. the content of the flashcard is also cloned when click add card
3. when creaed a new card with its term and ef content can make a new class to store it 
4. how will the unique id of th ecard be related to the user. because there will be multiple sets wtih 1,2,3,4,5 card id
5. how will the card be linked to the specifc set of the user

if you want to make new divs based on existing array you use maps or filter
learn more about those becuase they open up more of hwat can be done

6. another issue is that it doesnt ssave when refreshed so it has insert in to ds and save in data base and retrive from data base and update in data base  
*/


export default function CreateFlashCards(){

  const [fruits, setFruits] = useState([]);
  const[count,setCount]=useState(1)
const addCard=()=>{
  setCount(count+1) 
  setFruits([...fruits,count])
  console.log(fruits)
  console.log(count)

}



  const cardTemaplate = (index)=>{
return (
  <div key={index} className="create-tiles-container">
 
        <div className="tiles-container">
          <div className="tiles-inner-container">
            <div className="number-trash-container">
              <div className="number"><span>{index+2}</span></div>
              <div className="trash-can"><span><FaTrashAlt onClick={() => removeCards(index)}
/></span></div>
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
)
  }
const removeCards = (index) => {
  const newFruits = fruits.filter((_, i) => i !== index);
  setFruits(newFruits);
  console.log(newFruits);
  setCount(count-1)
  
};


const showNewCards = ()=>{
  return(
  fruits.map((fruit, index) => (
    <div key={index}>
      {cardTemaplate(index)} 
      <div></div>
    </div> 
  ))
  )
}
const [formValues, setFormValues] = useState({term: '', answer: '',likes: '', userId:''})

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const p = await SignInUser(formValues)
console.log(formValues)

    setFormValues({term: '', answer: '', likes:''})
}

//it should reset the forms and it has to ente more than one falshcard

const SignInUser = async (data) => {
  try {
    const res = await Client.post('/api/flashcards/create', data)
    // Set the current signed in users token to localStorage
    // localStorage.setItem('token',res.data.token)
    // console.log(res.data.user)
  } catch (error) {
    throw error
  }
}

  return(
    
    <div className="create-flashcards-container"> 
 <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          
          <div className="input-wrapper">
            <label className ='color'htmlFor="input">likes</label>
            <input
              onChange={handleChange}
              type="input"
              name="likes"
              value={formValues.likes}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className ='color' htmlFor="input">userId</label>
            <input
              onChange={handleChange}
              type="input"
              name="userId"
              value={formValues.userId}
              required
            />
          </div>
      
        </form>
      </div>
    </div>

    <div className='flashcard-header'>
      <h3>Create a New Flashcard Set</h3>
    </div>
      <Title/>
      <Description/>
      <div className="tes">
      <div className="create-tiles-container">
        <div className="tiles-container">
          <div className="tiles-inner-container">
            <div className="number-trash-container">
              <div className="number"><span>1</span></div>
              <div className="trash-can"><span><FaTrashAlt onClick={removeCards}/></span></div>
            </div>
            <div className="term-def-container">
            <form className="term-def-container" onSubmit={handleSubmit}>

              <input className="term-container" placeholder="Term" onChange={handleChange}
              type="input"
              name="term"
              value={formValues.term}

              required>

              </input>
              <input className="def-container" placeholder="Definition" onChange={handleChange}
              type="input"
              name="answer"
              value={formValues.answer}
              required>

              </input>
              </form>
            </div>

          </div>

        </div>

      </div>
      {showNewCards()}

      </div>
      <div className="add-tile-container">
        <div className="inner-add-container">
          <div className="add-button-container">
            <button className="add-card-btn" onClick={addCard}> + Add Card</button>
         

          </div>

        </div>
        

      </div>
      <div className="create-btn-cont">
        <div className="create-btn-cont-inner">
        <button className='create-flash-btn' onClick={handleSubmit}>Create</button>
        </div>
        </div>
      

    </div>
  )
  
}
import Client from "../services/api.js";
import { useEffect, useState, React } from "react";
import axios from "axios";
import { createElement } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Flashcards from "./Flashcards.jsx";
import { BASE_URL } from "../services/api.js";
import Description from "./Description.jsx";
import Title from "./Title.jsx";

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

export default function CreateFlashCards() {
  const [fruits, setFruits] = useState([]);
  const [count, setCount] = useState(1);

  const cardArr = [];

  const cardTemaplate = (index) => {
    let card = (
      <div key={index} className="create-tiles-container">
        <div className="tiles-container">
          <div className="tiles-inner-container">
            <div className="number-trash-container">
              <div className="number">
                <h>{index + 1}</h>
              </div>
              <div className="trash-can">
                <span>
                  <FaTrashAlt onClick={() => removeCards(index)} />
                </span>
              </div>
            </div>
            <div className="term-def-container">
              <form className="term-def-container" onSubmit={handleSubmit}>
                <input
                  id={index}
                  className="term-container"
                  placeholder="Term"
                  onChange={handleChange}
                  type="input"
                  name="term"
                  value={formValues.term}
                  required
                ></input>
                <input
                  id={index}
                  className="def-container"
                  placeholder="Definition"
                  onChange={handleChange}
                  type="input"
                  name="answer"
                  value={formValues.answer}
                  required
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

    return card;
  };
  const addCard = () => {
    setCount(count + 1);
    setFruits([...fruits, count]);
    console.log(fruits);
    console.log(count);
  };

  const removeCards = (index) => {
    const newFruits = fruits.filter((_, i) => i !== index);
    setFruits(newFruits);
    console.log(newFruits);
    setCount(count - 1);
  };

  const showNewCards = () => {
    return fruits.map((fruit, index) => (
      <div key={index}>
        {cardTemaplate(index)}
        <div></div>
      </div>
    ));
  };
  //when clicked new card the .name also has teh index which is then added into the state differnetly to antoher index

  const [formValues, setFormValues] = useState([
    { term: "", answer: "", likes: 2, userId: 2 },
  ]);
  const [values, setValues] = useState({
    term: "",
    answer: "",
    likes: 2,
    userId: 2,
  });
  const handleChange = (e) => {
    let newValues = values;
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
    let forms = formValues;
    forms[e.target.id] = newValues;

    setFormValues(forms);

    console.log(e.target.id);

    console.log(forms);
  };
  // map into the state based on the key

  const handleSubmit = async (e) => {
    e.preventDefault();

    const p = await SignInUser(formValues);
    console.log(formValues);
  };

  //it should reset the forms and it has to ente more than one falshcard

  // [
  //   {
  //   term:'efdf',
  //   answer:'dfdf'
  // },{
  //   term:'dgdgd',
  //   answer:'dgdgd',
  // }
  // ]

  const SignInUser = async (data) => {
    try {
      formValues.forEach(async (value, i, formValues) => {
        const res = await Client.post("/api/flashcards/create", value);
        // Set the current signed in users token to localStorage
        // localStorage.setItem('token',res.data.token)
        // console.log(res.data.user)
        console.log(formValues);
      });
    } catch (error) {
      throw error;
    }
  };

  //var for each form to be unquie object which has its own axios based on key. have the form to behave as unique object. give inpnut unique name, when axios mapping through use index as the varable.

  return (
    <div className="create-flashcards-container">
      <h3>Create a New Flashcard Set</h3>

      <Title />

      <Description />

      {showNewCards()}

      <div className="add-tile-container">
        <button className="link-button" onClick={addCard}>
          {" "}
          + Add Card
        </button>
      </div>

      <button className="tonal-button" onClick={handleSubmit}>
        Create
      </button>

      {/* Hidden stuff */}
      <div className="signin col">
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit} hidden>
            <div className="input-wrapper">
              <label className="color" htmlFor="input">
                likes
              </label>
              <input
                onChange={handleChange}
                type="input"
                name="likes"
                value="2"
                required
              />
            </div>

            <div className="input-wrapper">
              <label className="color" htmlFor="input">
                userId
              </label>
              <input
                onChange={handleChange}
                type="input"
                name="userId"
                value="2"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

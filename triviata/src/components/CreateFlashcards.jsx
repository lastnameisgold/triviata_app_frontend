import { useEffect, React } from 'react';
import { createElement } from 'react'
import { FaTrashAlt } from 'react-icons/fa';

import Description from "./Description.jsx"
import Title from "./Title.jsx"
export default function CreateFlashCards(){

  // class Flashcards{
  //   constructor(term, defintion){
  //     this.term = term;
  //     this.defintion = defintion;
  //     this.cardNum = this.cardNum;// needs to keep track of the card number
  //   }
  // }
// do i have create and remove card  wihtin the class?


//can make a class with thew classnames for the div and create new based on click
//can clone the div with its children on click
//
// useEffect (()=> {

// function
function createEl(){
  let objTo = document.querySelector(".create-tiles-container")
  // return createElement('div', {className:'create-tiles-container'}, 'test div')
    let divtest = createElement("div",{className:'tiles-container'},'test div');

    objTo.appendChild(divtest)
}

// const myData = [
//   {key: 1, name: "Hello"},
//   {key: 2, name: "World"},
//   {key: 3, name: "etc"}
// ];

//   // the loop. it'll return array of react node.
//   const children = myData.map((val) => (
//     <button id={val.key}>{val.name}</button>
//   ));
  
//create a div with the same classname
//create children divs with the same classname


// var elements = [];
// for(let i = 0;i < 5;i++){
//     elements.push(createElement("div",null));
// }

// let mainContainer = createElement("div", { className: "contexCon" },elements);


  const createCard = ()=>{
    let divOG = document.querySelector(".tes");
    let divNew = document.querySelector(".create-tiles-container")
    divOG.appendChild(divNew.cloneNode(true));
  }


  return(
    
    <div className="create-flashcards-container"> 
      <Title/>
      <Description/>
      <div className="tes">
      <div className="create-tiles-container">
        <div className="tiles-container">
          <div className="tiles-inner-container">
            <div className="number-trash-container">
              <div className="number"><span>1</span></div>
              <div className="trash-can"><span><FaTrashAlt/></span></div>
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
      <div className="add-tile-container">
        <div className="inner-add-container">
          <div className="add-button-container">
            <button className="add-card-btn" onClick={createCard}> + Add Card</button>
         

          </div>

        </div>
        
      </div>
      

    </div>
  )
  
}
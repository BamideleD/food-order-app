import React, {useEffect, useReducer, useState} from "react";
import styles from "./App.module.css";
import Cartmodal from "./Cart/Inner/Cartmodal";
import ButtonContext from "./Context/ButtonContext";
import FoodSection from "./Food/FoodSection";
import Info from "./Info/Info";
import Background from "./UI/Background";
import Navbar from "./UI/Navbar";





const App = () => {

  const [modal, setModal] = useState(false);

  const [amount, setAmount] = useState(1); 

  const [cartNumber, setCartNumber] = useState(0)

  const buttonClick = (event) => {
    event.preventDefault();
    console.log(amount);
    setCartNumber((...prev) => parseInt(prev) + parseInt(amount))
    

    
  }

  const cartClick = () => {
    setModal(true)
  }

  const closePortal = () => {
    setModal (false)
  }

  
  
  return(
    <React.Fragment>
      <div>
        {modal && <Cartmodal closePortal = {closePortal} />}
      </div>
      <div className={styles.overall}>
        <ButtonContext.Provider value = {{amount: 1}}>
          <div className={styles.back}>
            <Background /> 
            <Info />
            <Navbar amount = {amount} cartNumber = {cartNumber} cartClick = {cartClick} />
            
          </div>
          <div className={styles.food}>
            <FoodSection amount = {amount} setAmount = {setAmount} buttonClick = {buttonClick}/>
          </div>
        </ButtonContext.Provider>
      </div>
    </React.Fragment>
  )
}


export default App;
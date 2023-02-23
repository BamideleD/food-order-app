import React, {useEffect, useReducer, useState, useRef} from "react";
import styles from "./App.module.css";
import Cartmodal from "./Cart/Inner/Cartmodal";
import ButtonContext from "./Context/ButtonContext";
import FoodSection from "./Food/FoodSection";
import Info from "./Info/Info";
import Background from "./UI/Background";
import Navbar from "./UI/Navbar";





const App = () => {


  

  const [amount, setAmount] = useState(1); 
  
  const amountRef = useRef(amount);


  const [cartNumber, setCartNumber] = useState(0)

  const buttonClick = (event) => {
    event.preventDefault();
    setCartNumber((...prev) => parseInt(prev) + parseInt(amount))
    console.log(amountRef.current.value);
    setAmount(amountRef.current.value)

    
  }



  
  
  return(
    <React.Fragment>
      {/* <div>
        <Cartmodal />
      </div> */}
      <div className={styles.overall}>
        <ButtonContext.Provider value = {{amount: 1}}>
          <div className={styles.back}>
            <Background /> 
            <Info />
            <Navbar amount = {amount} cartNumber = {cartNumber}  />
            
          </div>
          <div className={styles.food}>
            <FoodSection amount = {amount} setAmount = {setAmount} buttonClick = {buttonClick} amountRef = {amountRef}/>
          </div>
        </ButtonContext.Provider>
      </div>
    </React.Fragment>
  )
}


export default App;
import React, {useEffect, useReducer, useState} from "react";
import styles from "./App.module.css";
import Cartmodal from "./Cart/Inner/Cartmodal";
import ButtonContext from "./Context/ButtonContext";
import FoodSection from "./Food/FoodSection";
import Info from "./Info/Info";
import Background from "./UI/Background";
import Navbar from "./UI/Navbar";


const cartReducer = (state, action) => {
  if (action.type === 'AMOUNT'){
    return {amount: action.val, cartNumber: action.val}
  }
  return {amount:1, cartNumber: 0}
  
}


const App = () => {

  const [cartNo, dispatchCart] = useReducer(cartReducer, {amount:1, cartNumber: 0});

  const buttonClick = (event) => {
    event.preventDefault();
    console.log(cartNo.amount);
    dispatchCart({type: 'CART_NUMBER', val: cartNo.amount});
    
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
            <Navbar amount = {cartNo.amount} cartNumber = {cartNo.cartNumber}  />
            
          </div>
          <div className={styles.food}>
            <FoodSection amount = {cartNo.amount} setAmount = {cartReducer.amount} buttonClick = {buttonClick}/>
          </div>
        </ButtonContext.Provider>
      </div>
    </React.Fragment>
  )
}


export default App;
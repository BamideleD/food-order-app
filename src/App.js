import React, {useEffect, useReducer, useState} from "react";
import styles from "./App.module.css";
import Cartmodal from "./Cart/Inner/Cartmodal";
import ButtonContext from "./Store/button-context";
import FoodSection from "./Food/FoodSection";
import Info from "./Info/Info";
import Background from "./UI/Background";
import Navbar from "./UI/Navbar";
import CartProvider from "./Store/CartProvider";





const App = () => {

  const [modal, setModal] = useState(false);

  const [amount, setAmount] = useState(1); 

  const [cartNumber, setCartNumber] = useState(0)

  const buttonClick = (event) => {
    event.preventDefault();
    setCartNumber((...prev) => parseInt(prev) + parseInt(amount))
    

    
  }

  const cartClick = () => {
    setModal(true)
  }

  const closePortal = () => {
    setModal (false)
  }



  const eachMeal = [
    {name:'Sushi', desc: 'Finest fish and veggies', price:22.99, id: '1'}, 
    {name:'Schnitzel', desc: 'A german specialty!', price:16.50, id:'2'}, 
    {name:'Barbecue Burger', desc: 'American, raw, meaty', price:12.99, id: '3'}, 
    {name:'Green Bowl', desc: 'Healthy...and green...', price:18.99, id: '4'}]




  

  



  

  
  
  return(
    <CartProvider>
      <div>
        {modal && <Cartmodal closePortal = {closePortal} />}
      </div>
      <div className={styles.overall}>
          <div className={styles.back}>
            <Background /> 
            <Info />
            <Navbar amount = {amount} cartNumber = {cartNumber} cartClick = {cartClick} />
            
          </div>
          <div className={styles.food}>
            <FoodSection eachMeal = {eachMeal} amount = {amount} setAmount = {setAmount} buttonClick = {buttonClick}/>
          </div>
      </div>
    </CartProvider>
  )
}


export default App;
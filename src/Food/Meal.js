import React, { useState, useRef } from "react";
import styles from './Meal.module.css';


const Meal = (props) => {
    const amountInputRef = useRef();

    const [amount, setAmount] = useState(props.amount)

    const newAmount = (event) => {

        setAmount((event.target.value))
        props.setAmount(event.target.value)
        
    }


    const enteredAmount = amountInputRef.current.value
    

    const formal =     {
        name:props.name,
        desc:props.desc,
        price: props.price,
        amount: parseInt(enteredAmount)   
    }

    

    

    const handleSubmit = (event) => {
    event.preventDefault();
    props.setSubmitMeal(formal);
     
  }


    
   


    return (
        <form className={styles.overall} onSubmit = {handleSubmit}>
            <div className={styles.meal} key = {formal.id}>
                <h3>{props.name}</h3>
                <i>{props.desc}</i>
                <b> ${props.price}</b>
            </div>

            <div className={styles.amount}>
            
                <div>
                    <label>Amount</label>
                    <input type = 'number' ref = {amountInputRef} defaultValue = {amount} min = '1' max = '5' step = '1' onChange = {newAmount} />
                </div>
                <button type="submit"> + Add </button> 
            </div>
        </form>
    )
}



export default Meal;
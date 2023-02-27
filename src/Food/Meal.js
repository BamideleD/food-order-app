import React, { useState } from "react";
import styles from './Meal.module.css';


const Meal = (props) => {

    const [amount, setAmount] = useState(props.amount)

    const newAmount = (event) => {

        setAmount((event.target.value))
        props.setAmount(event.target.value)
        
    }

    const formal =     {
        id: Math.random(),
        name:props.name,
        desc:props.desc,
        price: props.price,
        amount: parseInt(amount),    
    }

    const [submitMeal, setSubmitMeal] = useState(props.submitMeal)


    const handleSubmit = (event) => {
    event.preventDefault();

   

    setSubmitMeal(submitMeal.push(formal));
    

    props.setSubmitMeal(submitMeal)

    console.log(submitMeal);
    return submitMeal
  }


    
   


    return (
        <form className={styles.overall} onSubmit = {handleSubmit}>
            <div className={styles.meal}>
                <h3>{props.name}</h3>
                <i>{props.desc}</i>
                <b> ${props.price}</b>
            </div>

            <div className={styles.amount}>
            
                <div>
                    <label>Amount</label>
                    <input type = 'number' defaultValue = {amount} onChange = {newAmount} />
                </div>
                <button type="submit"> + Add </button>
               
            </div>

        </form>
    )
}



export default Meal;
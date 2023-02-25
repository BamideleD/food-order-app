import React, { useState } from "react";
import styles from './Meal.module.css';


const Meal = (props) => {

    const [amount, setAmount] = useState(props.amount)

    const newAmount = (event) => {
        props.setAmount(event.target.value)
        setAmount((event.target.value))
    }

    const [submitMeal, setSubmitMeal] = useState(props.submitMeal)

    const submit  = () => {
        
        props.setSubmitMeal(
            {
                name:props.name,
                desc:props.desc,
                price: props.price,
                amount: parseInt(amount)
            }
        )
        setSubmitMeal({
            name:props.name,
            desc:props.desc,
            price: props.price,
            amount: parseInt(amount)
    });
    }

    const handleSubmit = (event) => {
    event.preventDefault();
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
                <button type="submit" onClick={submit} > + Add </button>
               
            </div>

        </form>
    )
}



export default Meal;
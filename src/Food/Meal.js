import React, { useState } from "react";
import styles from './Meal.module.css';


const Meal = (props) => {

    const [amount, setAmount] = useState(1)

    const newAmount = (event) => {
        setAmount(event.target.value)
    }

    

    const form = {
        name: props.name,
        desc: props.desc,
        price: props.amount,
        amount: amount 
    }

    const buttonClick = (event) => {
        event.preventDefault();
        console.log(form);
        
        
    }


    return (
        <form className={styles.overall}>
            <div className={styles.meal}>
                <h3>{props.name}</h3>
                <i>{props.desc}</i>
                <b>{props.amount}</b>
            </div>

            <div className={styles.amount}>
            
                <div>
                    <label>Amount</label>
                    <input type = 'number' value = {amount} onChange = {newAmount} />
                </div>
                <button type="submit" onClick = {buttonClick}> + Add </button>
               
            </div>

        </form>
    )
}



export default Meal;
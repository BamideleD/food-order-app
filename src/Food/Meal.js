import React, { useState } from "react";
import styles from './Meal.module.css';


const Meal = (props) => {

    const [amount, setAmount] = useState(props.amount)

    const newAmount = (event) => {
        setAmount(props.setAmount(event.target.value))
    }

    

    const form = {
        name: props.name,
        desc: props.desc,
        price: props.price,
        amount: amount 
    }

   


    return (
        <form className={styles.overall}>
            <div className={styles.meal}>
                <h3>{props.name}</h3>
                <i>{props.desc}</i>
                <b>{props.price}</b>
            </div>

            <div className={styles.amount}>
            
                <div>
                    <label>Amount</label>
                    <input type = 'number' defaultValue = {amount} onChange = {newAmount} />
                </div>
                <button type="submit" onClick = {props.buttonClick} > + Add </button>
               
            </div>

        </form>
    )
}



export default Meal;
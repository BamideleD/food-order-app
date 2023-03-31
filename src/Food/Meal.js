import React, { useContext, useRef } from "react";
import styles from './Meal.module.css';
import CartContext from "../Store/cart-context";


const Meal = (props) => {

    const cartCtx = useContext(CartContext);
    const amountInputRef = useRef(1);

    const handleSubmit = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value

    const formal =     {
        id: props.id,
        name:props.name,
        desc:props.desc,
        price: props.price,
        amount: parseInt(enteredAmount),    
    }

    cartCtx.addItem(formal)
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
                    <input type = 'number' ref = {amountInputRef} defaultValue = {1} min = '1' max = '5' step = '1' />
                </div>
                <button type="submit"> + Add </button> 
            </div>
        </form>
    )
}



export default Meal;
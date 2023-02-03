import React from "react";
import styles from './Meal.module.css';


const Meal = (props) => {
    return (
        <div className={styles.overall}>
            <div className={styles.meal}>
                <h3>{props.name}</h3>
                <i>{props.desc}</i>
                <b>{props.amount}</b>
            </div>

            <div className={styles.amount}>
                <div>
                    <label>Amount</label>
                    <input type = 'number' defaultValue = '1' />
                </div>
                <button> + Add </button>
            </div>

        </div>
    )
}



export default Meal;
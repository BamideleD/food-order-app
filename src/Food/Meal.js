import React from "react";
import styles from './Meal.module.css';


const Meal = () => {
    return (
        <div className={styles.overall}>
            <div className={styles.meal}>
                <h3>Sushi</h3>
                <i>Finest Fish and Veggies</i>
                <b>$22.99</b>
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
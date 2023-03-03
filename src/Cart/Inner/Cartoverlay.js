import React from "react";
import Cartitem from "./Cartitem";
import styles from './Cartoverlay.module.css';




const Cartoverlay = (props) => {


    const totalAmount = props.combinedMeals.map((meal)=> {
        console.log(meal);
        return parseFloat(meal.price) * parseFloat(meal.amount)
    })


    console.log(totalAmount);

    let sum = 0;
    totalAmount.map(x => sum += x);


    return (
        <div className={styles.overlay}>
            
            {props.combinedMeals.map((data) => {
                return <Cartitem 
                                    name = {data.name}
                                    price = {data.price} 
                                    amount = {data.amount}
                                    key =  {Math.random()}/>
            })}
            <div className={styles.ordersection}>
                <div className={styles.total}>
                    <div> Total Amount </div>
                    <div> ${sum.toFixed(2)} </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.closebutton}> Close </button>
                    <button> Order </button>
                </div>
            </div>
            
        </div>
    )
}


export default Cartoverlay;
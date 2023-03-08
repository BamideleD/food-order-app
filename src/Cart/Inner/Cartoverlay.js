import React, { useState } from "react";
import Cartitem from "./Cartitem";
import styles from './Cartoverlay.module.css';




const Cartoverlay = (props) => {
    
    console.log(props.combinedMeals);

    // const calcAmount = props.combinedMeals.map((meal)=> {
    //     return parseFloat(meal.amount)
    // })


    // const [combinedAmount, setCombinedAmount] = useState (amount)

    
    const totalAmount = props.combinedMeals.map((data)=> {
        return parseFloat(data.price) * parseFloat(data.amount)
    })



    let sum = 0;
    totalAmount.map(x => sum += x);


    return (
        <div className={styles.overlay}>
            
            {props.combinedMeals.map((data) => {
                return <Cartitem
                                    // combinedAmount = {combinedAmount}
                                    // setCombinedAmount = {setCombinedAmount} 
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
                    <button className={styles.closebutton} onClick = {props.closePortal}> Close </button>
                    <button> Order </button>
                </div>
            </div>
            
        </div>
    )
}


export default Cartoverlay;
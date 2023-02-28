import React from "react";
import Cartitem from "./Cartitem";
import styles from './Cartoverlay.module.css';




const Cartoverlay = (props) => {
    return (
        <div className={styles.overlay}>
            {props.combinedMeals.map((data) => {
                return <Cartitem 
                                    name = {data.name}
                                    price = {data.price} 
                                    amount = {data.amount}
                                    key =  {Math.random()}/>
            })}
            
        </div>
    )
}


export default Cartoverlay;
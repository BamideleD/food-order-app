import React from "react";
import styles from './FoodSection.module.css';
import Meal from "./Meal";


const FoodSection = (props) => {



    return (
        <div className={styles.FoodSection}>
            {props.eachMeal.map((data) => {
                return <Meal    
                                buttonClick = {props.buttonClick} 
                                amount = {props.amount} 
                                setAmount = {props.setAmount} 
                                name = {data.name} 
                                desc = {data.desc} 
                                price = {data.price} 
                                id = {data.id}
                                key = {data.id}/>
            })}
        </div>
    )
}



export default FoodSection;
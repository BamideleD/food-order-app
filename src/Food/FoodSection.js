import React from "react";
import styles from './FoodSection.module.css';
import Meal from "./Meal";


const FoodSection = (props) => {



    return (
        <div className={styles.FoodSection}>
            {props.eachMeal.map((data) => {
                return <Meal    
                                submitMeal = {props.submitMeal} 
                                setSubmitMeal = {props.setSubmitMeal}
                                form = {props.form}
                                buttonClick = {props.buttonClick} 
                                handleSubmit = {props.handleSubmit}
                                amount = {props.amount} 
                                setAmount = {props.setAmount} 
                                name = {data.name} 
                                desc = {data.desc} 
                                price = {data.price} 
                                key = {data.key}/>
            })}
        </div>
    )
}



export default FoodSection;
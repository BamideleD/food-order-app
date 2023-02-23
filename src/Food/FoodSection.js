import React from "react";
import styles from './FoodSection.module.css';
import Meal from "./Meal";


const FoodSection = (props) => {

    const eachMeal = [
        {name:'Sushi', desc: 'Finest fish and veggies', price: '$22.99', key: '1'}, 
        {name:'Schnitzel', desc: 'A german specialty!', price: '$16.50', key:'2'}, 
        {name:'Barbecue Burger', desc: 'American, raw, meaty', price: '$12.99', key: '3'}, 
        {name:'Green Bowl', desc: 'Healthy...and green...', price: '$18.99', key: '4'}]



    


    return (
        <div className={styles.FoodSection}>
            {eachMeal.map((data) => {
                return <Meal amountRef = {props.amountRef} buttonClick = {props.buttonClick} amount = {props.amount} setAmount = {props.setAmount} name = {data.name} desc = {data.desc} price = {data.price} key = {data.key}/>
            })}
        </div>
    )
}



export default FoodSection;
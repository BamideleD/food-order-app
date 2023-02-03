import React from "react";
import styles from './FoodSection.module.css';
import Meal from "./Meal";


const FoodSection = () => {

    const eachMeal = [
        {name:'Sushi', desc: 'Finest fish and veggies', amount: '$22.99', key: '1'}, 
        {name:'Schnitzel', desc: 'A german specialty!', amount: '$16.50', key:'2'}, 
        {name:'Barbecue Burger', desc: 'American, raw, meaty', amount: '$12.99', key: '3'}, 
        {name:'Green Bowl', desc: 'Healthy...and green...', amount: '$18.99', key: '4'}]


    return (
        <div className={styles.FoodSection}>
            {eachMeal.map((data) => {
                return <Meal name = {data.name} desc = {data.desc} amount = {data.amount} key = {data.key}/>
            })}
        </div>
    )
}



export default FoodSection;
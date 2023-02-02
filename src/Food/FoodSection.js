import React from "react";
import styles from './FoodSection.module.css';
import Meal from "./Meal";


const FoodSection = () => {
    return (
        <div className={styles.FoodSection}>
            <Meal />
            <Meal />
        </div>
    )
}



export default FoodSection;
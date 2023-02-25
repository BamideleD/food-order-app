import React from "react";
import Cartitem from "./Cartitem";
import styles from './Cartoverlay.module.css';




const Cartoverlay = (props) => {
    return (
        <div className={styles.overlay}>
            <Cartitem submitMeal = {props.submitMeal} />
        </div>
    )
}


export default Cartoverlay;
import React from "react";
import styles from './Cartnumber.module.css'



const Cartnumber = (props) => {
    return (
        <div className={styles.number}>
            {props.cartNumber}
        </div>
    )
}



export default Cartnumber;
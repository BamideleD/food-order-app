import React from "react";
import styles from './Cartitem.module.css'




const Cartitem = (props) => {
    return(
        <div className={styles.overall}>
            <div className={styles.name}>
                {props.submitMeal.name}
            </div>
            <div className={styles.plusminus}>
                <div className={styles.minus}> - </div>
                <div className={styles.plus}> + </div>
            </div>
            <div className={styles.priceXamount}>
                <div className={styles.price}>
                    ${props.submitMeal.price}
                </div>
                <div className={styles.amount}>
                    x {props.submitMeal.amount}
                </div>
            </div>
            <div className={styles.border}>

            </div>
            
            
        </div>
    )
}



export default Cartitem;
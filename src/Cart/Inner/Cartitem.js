import React from "react";
import styles from './Cartitem.module.css'




const Cartitem = (props) => {
    return(
        <div className={styles.overall}>
            <div className={styles.name}>
                {props.name}
            </div>
            <div className={styles.plusminus}>
                <div className={styles.minus}> - </div>
                <div className={styles.plus}> + </div>
            </div>
            <div className={styles.priceXamount}>
                <div className={styles.price}>
                    ${props.price}
                </div>
                <div className={styles.amount}>
                    x {props.amount}
                </div>
            </div>
            <div className={styles.border}>

            </div>
            
            
        </div>
    )
}



export default Cartitem;
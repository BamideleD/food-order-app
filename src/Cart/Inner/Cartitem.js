import React, { useState } from "react";
import styles from './Cartitem.module.css'




const Cartitem = (props) => {

    const [minus, setMinus] = useState(props.amount)

    const amountMinus = () => {
        setMinus(minus - 1)
    }

    console.log(minus);


    const [plus, setPlus] = useState(props.amount)

    const amountPlus = () => {
        setPlus(plus + 1)
    }

    console.log(plus);




    return(
        <div className={styles.overall}>
            <div className={styles.name}>
                {props.name}
            </div>
            <div className={styles.plusminus}>
                <div className={styles.minus} onClick = {amountMinus}> - </div>
                <div className={styles.plus} onClick = {amountPlus}> + </div>
            </div>
            <div className={styles.priceXamount}>
                <div className={styles.price}>
                    ${props.price}
                </div>
                <div className={styles.amount}>
                    x {minus}
                </div>
            </div>
            <div className={styles.border}>

            </div>
            
            
        </div>
    )
}



export default Cartitem;
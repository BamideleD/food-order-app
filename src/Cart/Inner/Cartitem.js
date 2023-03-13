import React, {useState} from "react";
import styles from './Cartitem.module.css'




const Cartitem = (props) => {

    

    const [value, setValue] = useState(props.amount)

    const setAmount = (action = "plus") => {
        const newValue = action === "plus" ? value + 1 : value - 1
        setValue(newValue)
    }

    


    return(
        <div className={styles.overall}>
            <div className={styles.name}>
                {props.name}
            </div>
            <div className={styles.plusminus}>
                <div className={styles.minus} onClick = {() => setAmount("minus")}> - </div>
                <div className={styles.plus} onClick = {() => setAmount("plus")}> + </div>
            </div>
            <div className={styles.priceXamount}>
                <div className={styles.price}>
                    ${props.price}
                </div>
                <div className={styles.amount}>
                    x {value}
                </div>
            </div>
            <div className={styles.border}>

            </div>
            
            
        </div>
    )
}



export default Cartitem;
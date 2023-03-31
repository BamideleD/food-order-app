import React, {useState} from "react";
import styles from './Cartitem.module.css'




const Cartitem = (props) => {

    

    const [value, setValue] = useState(props.amount)

 

    


    return(
        <div className={styles.overall}>
            <div className={styles.name}>
                {props.name}
            </div>
            <div className={styles.plusminus}>
                <div className={styles.minus} onClick = {props.onRemove}> - </div>
                <div className={styles.plus} onClick = {props.onAdd}> + </div>
            </div>
            <div className={styles.priceXamount}>
                <div className={styles.price}>
                    ${props.price.toFixed(2)}
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
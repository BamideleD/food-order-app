import React, {useContext}from "react";
import CartContext from "../../Store/cart-context";
import styles from './Cartnumber.module.css'



const Cartnumber = (props) => {

    const cartCtx = useContext(CartContext);

    const totalInCart = cartCtx.item.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0) 

 
    return (
        <div className={styles.number}>
            {totalInCart}
        </div>
    )
}



export default Cartnumber;
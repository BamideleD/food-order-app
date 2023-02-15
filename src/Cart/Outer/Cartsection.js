import React from "react";
import {FaShoppingCart} from 'react-icons/fa'
import styles from './Cartsection.module.css'
import Cartnumber from "./Cartnumber";




const Cartsection = (props) => {


  
    return (
        <div className={styles.cart} onClick = {props.cartClick}>
            <FaShoppingCart />
            <h4> Your Cart </h4>
            <Cartnumber />
        </div>
    )
}



export default Cartsection;
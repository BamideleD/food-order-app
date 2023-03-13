import React from "react";
import {FaShoppingCart} from 'react-icons/fa'
import styles from './Cartsection.module.css'
import Cartnumber from "./Cartnumber";




const  Cartsection = (props) => {


  
    return (
        <div className={styles.cart} onClick = {props.cartClick}>
            <FaShoppingCart />
            <h4> Your Cart </h4>
            <Cartnumber amount = {props.amount} cartNumber = {props.cartNumber} />
        </div>
    )
}



export default Cartsection;
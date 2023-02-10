import React from "react";
import {FaShoppingCart} from 'react-icons/fa'
import styles from './Cartsection.module.css'
import Cartnumber from "./Cartnumber";

const Cartsection = () => {
    return (
        <div className={styles.cart}>
            <FaShoppingCart />
            <h4> Your Cart </h4>
            <Cartnumber />
        </div>
    )
}



export default Cartsection;
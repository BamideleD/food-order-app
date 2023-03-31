import React, {useEffect, useContext, useState}from "react";
import {FaShoppingCart} from 'react-icons/fa'
import styles from './Cartsection.module.css'
import Cartnumber from "./Cartnumber";
import CartContext from "../../Store/cart-context";




const  Cartsection = (props) => {

    const [HL, setHL] = useState(false)
    const CartCtx = useContext(CartContext)

    useEffect(() => {
        if (CartCtx.item.length === 0){
            return;
        } 
        else {setHL(true)}


        const  timer = setTimeout(() => {
            setHL(false)
        }, 300);


        return () => {
            clearTimeout(timer);
        }
    },[CartCtx.item])


    const cartBump = `${styles.cart} ${HL ? styles.bump: ''}`



    
  
    return (
        <div className={cartBump} onClick = {props.cartClick}>
            <FaShoppingCart />
            <h4> Your Cart </h4>
            <Cartnumber amount = {props.amount} cartNumber = {props.cartNumber} />
        </div>
    )
}



export default Cartsection;
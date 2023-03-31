import React, { useState, useContext } from "react";
import Cartitem from "./Cartitem";
import CartContext from "../../Store/cart-context";
import styles from './Cartoverlay.module.css';




const Cartoverlay = (props) => {

    
    const cartCtx =  useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const hasItems = cartCtx.item.length > 0

    const cartItemRemove = (id) => {
      cartCtx.removeItem({...id})
    }

    const cartItemAdd = (item) => {
      cartCtx.addItem({...item,amount:1})
    }





    




    

    


    return (
        <div className={styles.overlay}>
            
            {cartCtx.item.map((data) => {
                return <Cartitem 
                                    name = {data.name}
                                    price = {data.price} 
                                    amount = {data.amount}
                                    key =  {Math.random()}
                                    onRemove = {cartItemRemove.bind(null, data)}
                                    onAdd = {cartItemAdd.bind(null, data)}
                                                             /> 
            })}
            <div className={styles.ordersection}> 
                <div className={styles.total}>
                    <span> Total Amount </span>
                    <span> ${totalAmount }</span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.closebutton} onClick = {props.closePortal}> Close </button>
                    {hasItems && <button> Order </button>}
                </div>
            </div>
            
        </div>
    )
}


export default Cartoverlay;
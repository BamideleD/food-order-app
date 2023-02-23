import React from "react";
import Cartsection from "../Cart/Outer/Cartsection";

import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={styles.nav}>
            <h2 className={styles.reactmeals}>ReactMeals</h2>
            <div className={styles.cartsection}>
                <Cartsection amount = {props.amount} cartNumber = {props.cartNumber} cartClick = {props.cartClick} />
            </div> 
        </div>
    )
}

export default Navbar;
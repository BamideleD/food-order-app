import React from "react";
import Cart from "../Cart/Cartsection";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <h2>ReactMeals</h2>
            <Cart /> 
        </div>
    )
}

export default Navbar;
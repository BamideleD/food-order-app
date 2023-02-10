import React from "react";
import Cartsection from "../Cart/Cartsection";

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <h2 className={styles.reactmeals}>ReactMeals</h2>
            <div className={styles.cartsection}>
                <Cartsection />
            </div> 
        </div>
    )
}

export default Navbar;
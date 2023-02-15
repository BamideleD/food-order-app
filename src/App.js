import React from "react";
import styles from "./App.module.css";
import Cartmodal from "./Cart/Inner/Cartmodal";
import FoodSection from "./Food/FoodSection";
import Info from "./Info/Info";
import Background from "./UI/Background";
import Navbar from "./UI/Navbar";




const App = () => {
  return(
    <React.Fragment>
      <div className={styles.overall}>
        <div>
          <Cartmodal />
        </div>
        <div className={styles.back}>
          <Background />
          <Navbar />
          <Info />
        </div>
        <div className={styles.food}>
          <FoodSection />
        </div>
      </div>
    </React.Fragment>
  )
}


export default App;
import React from "react";
import styles from "./App.module.css";
import FoodSection from "./Food/FoodSection";
import Info from "./Info/Info";
import Background from "./UI/Background";



const App = () => {
  return(
    <React.Fragment>
      <div className={styles.overall}>
        <div className={styles.back}>
          <Background />
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
import React from "react";
import styles from "./App.module.css";
import FoodSection from "./Food/FoodSection";



const App = () => {
  return(
    <React.Fragment>
      <div className={styles.app}>
        <FoodSection />
      </div>
    </React.Fragment>
  )
}


export default App;
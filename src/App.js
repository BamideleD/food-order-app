import React from "react";
import styles from "./App.module.css";
import FoodSection from "./Food/FoodSection";
import Info from "./Info/Info";



const App = () => {
  return(
    <React.Fragment>
      <div className={styles.app}>
        <Info />
        <FoodSection />
      </div>
    </React.Fragment>
  )
}


export default App;
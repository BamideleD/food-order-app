import React from "react";
import styles from "./App.module.css";
import FoodSection from "./Food/FoodSection";
import Info from "./Info/Info";
import Background from "./UI/Background";



const App = () => {
  return(
    <React.Fragment>
      <div>
        <Background />
      </div>
      <div className={styles.app1}>
        <Info />
        <FoodSection />
      </div>
    </React.Fragment>
  )
}


export default App;
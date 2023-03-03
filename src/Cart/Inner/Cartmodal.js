import React from "react";
import  ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Cartoverlay from "./Cartoverlay";





const Cartmodal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div>
                    <Backdrop closePortal = {props.closePortal} />
                    <Cartoverlay combinedMeals = {props.combinedMeals} priceXamount = {props.priceXamount} />
                </div>,
                document.getElementById('cart-modal')
            )}            
        </React.Fragment>
    )

}


export default Cartmodal;
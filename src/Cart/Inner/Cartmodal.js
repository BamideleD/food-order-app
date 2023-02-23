import React from "react";
import Backdrop from "./Backdrop";
import Cartoverlay from "./Cartoverlay";





const Cartmodal = (props) => {

    return (
        <div >
            <Backdrop closePortal = {props.closePortal} />
            <Cartoverlay />
        </div>
    )

}


export default Cartmodal;
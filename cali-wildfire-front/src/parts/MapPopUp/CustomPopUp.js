import React from "react";
import { OverlayView } from "@react-google-maps/api";
import "./CustomPopUp.css";

const popupOffset ={
    x:0,
    y:0,
};

const CustomPopup = ({ position, words }) =>{
    return(
        <OverlayView
            position = {position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}   
        >
            <div className="popup-container">
                {words}
            </div>
        </OverlayView>
    );
};

export default CustomPopup;
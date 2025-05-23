import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// request('dotenv').config();  i guess i can go screw myself huh

const containerStyle ={
    width: '100%',
    height: '500px'
};

// this might not be needed... I think 

const center ={
    lat: 34.009242,
    lng: -118.497604

}

function MapContainer() {
    return (
        <LoadScript googleMapApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {/* Extra shit goes here: Pins, Labels, Pop-ups */}
            </GoogleMap>
        </LoadScript>
    );
}

export default MapContainer;








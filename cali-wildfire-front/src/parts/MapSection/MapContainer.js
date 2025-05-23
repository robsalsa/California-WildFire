import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Papa from "papaparse";
import CustomPopup from "../MapPopUp/CustomPopUp";


const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 34.009242,
    lng: -118.497604
};

function MapContainer() {
    const [ubicacion, setUbicacion] = useState([]);
    const [select, setSelect] = useState(null);

    useEffect(() => {
        fetch("/mapdataall.csv")
            .then((response) => response.text())
            .then((csvText) => {
                const parsed = Papa.parse(csvText, { header: true });
                setUbicacion(parsed.data);
            });
    }, []);

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {ubicacion.map((location, index) => {
                    const lat = parseFloat(location.incident_latitude);
                    const lng = parseFloat(location.incident_longitude);
                    if (isNaN(lat) || isNaN(lng)) return null;

                    return (
                        <Marker
                            key={index}
                            position={{ lat, lng }}
                            title={location.incident_name}
                        // info={location.incident_url}
                            onClick={()=>
                                setSelect({
                                    lat,
                                    lng,
                                    location,
                                })
                            }
                        />
                    )
                })}
                {select && (
                    <CustomPopup
                        position={{ lat: select.lat, lng: select.lng }}
                        content={
                            <div>
                                <p>Incident ID: {select.location.incident_id}</p>
                                <p>Incident Type/Name: {select.location.incident_name}</p>
                                <a href={select.location.incident_url} target="_blank" rel="noopenr noreferrer">
                                    Learn More
                                </a>
                            </div>
                        }
                    >

                    </CustomPopup>
                )}
            </GoogleMap>
        </LoadScript>
    );
}

export default MapContainer;
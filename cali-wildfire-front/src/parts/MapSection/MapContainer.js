import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Papa from "papaparse";
import PopUP from "../PopUp/PopUP";

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

    const mapref = useRef(null);
    const popupContentRef = useRef(null);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/fire-coordinates")
            .then((response) => response.json()) // Parse as JSON
            .then((data) => {
                setUbicacion(data); // Use data directly
            })
            .catch((err) => console.error("Error fetching fire data:", err));
    }, []);

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={10}
                onLoad={(map) =>{
                    mapref.current=map;
                }}

            >
                {ubicacion.map((fire, index) => {
                    const lat = parseFloat(fire.latitude);
                    const lng = parseFloat(fire.longitude);
                    if (isNaN(lat) || isNaN(lng)) return null;

                    return (
                        <Marker
                        key={fire.unique_id || index}
                        position={{ lat, lng }}
                        title={fire.name}
                        onClick={() =>
                            setSelect({
                                lat,
                                lng,
                                fire,
                            })
                            }
                        />
                    )
                })}
                {select && (
                    <div ref={popupContentRef}>
                        <div>
                            {/* <button onClick={() => setSelect(null)} className="popup-close-button">close</button> */}
                            <h3>Incident Name: {select.fire.name}</h3>
                            <p>Unique ID: {select.fire.unique_id}</p>
                            <p>Status: {select.fire.is_active ? "🔥 Active" : "✅ Contained"}</p>
                        </div>
                    </div>
                )}

                {select && popupContentRef.current && (
                    <PopUP
                        map={mapref.current}
                        position={new window.google.maps.LatLng(select.lat, select.lng)}
                        content={popupContentRef.current}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
}

export default MapContainer;
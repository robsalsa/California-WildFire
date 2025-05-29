// src/MyComponent.js
import React, { useEffect } from "react";

function MyComponent() {
    console.log("API Key:", process.env.REACT_APP_GOOGLE_MAP_API); //  Safe logging

    return (
        <div>
            Google Maps will load here.
        </div>
    );
}

export default MyComponent;
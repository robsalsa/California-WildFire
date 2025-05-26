import React from 'react';
import { Link } from 'react-router-dom';
// import NotFoundMaybe from '../assets/comingsoonbear';
import './NotFound.css';

//import .CSS

const ErrorPage = () => {
    return(
        <div className="error-container">
            <h1>404! PAGE NOT FOUND!</h1>
            {/* <img 
                src={NotFoundMaybe}     I dont think its worth it tbh
                alt="Waiting..."
            /> */}
        </div>


    );
};

export default ErrorPage;
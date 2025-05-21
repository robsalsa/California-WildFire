import React from 'react';
import './Header.css';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import '../WildfireTimelineSection/Timeline';
//everything up here acts like Java or Python imports the ONLY ONES that are different is the "import '../WildfireTimelineSection/Timeline';"
//Reason for it is because I have it linked in the header. 

//This is the header section the point of this is to reserve some space from the top of ALL pages.



const Header = () =>{
//Imagine this is where you can put Javascript Scripts from HTML. 
//If your function or folder doesnt really need or do something with the Backend leave this blank like this page :)
    return (
        //Everything under this return is the React wrapped version of HTML. I think one of the biggest differences is the "class" vs "className" 
        <header className= "Header">
            <header>
                <h1>California Fires</h1>
            </header>
            <Menu>
                <a className="menu-item" href="/">Home</a>
                
{/* 
                <a href ="/#thing1">Thing1</a>
                <a href ="/#thing2">Thing2</a>
                <a href ="/#thing3">Thing3</a>
                <a href ="/#thing4">thing4</a>
                
                <Link to="/link2">link1</Link> */}
                <Link to="/WildfireTimelineSection">Previous Fires</Link>
            </Menu>
        </header>
    );
};



export default Header;
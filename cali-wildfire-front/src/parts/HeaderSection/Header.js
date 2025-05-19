import React from 'react';
import './Header.css';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";


const Header = () =>{
    return (
        <header className= "Header">
            <Menu>
                <a classname="menu-item" href="/">Home</a>

                <a href ="/#thing1">Thing1</a>
                <a href ="/#thing2">Thing2</a>
                <a href ="/#thing3">Thing3</a>
                <a href ="/#thing4">thing4</a>
                
                <Link to="/link2">link1</Link>
                <Link to="/link2">link2</Link>
            </Menu>
        </header>
    );
};



export default Header;
import React from 'react';
import './Navbar.scss';
import logo from '../../../ma5.png'
export default function Navbar() {
    return (
        <nav className='navbar'>
            <img height='50' src={logo} alt="logo"/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="navlink">
                        home
                    </a>
                </li>
                <li>
                    <a href="/" className="navlink">
                        about
                    </a>
                </li>
                <li>
                    <a href="/" className="navlink active">
                        tours
                    </a>
                </li>
            </ul>
        </nav>
    )
}

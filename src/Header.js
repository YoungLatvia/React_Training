import React from "react";
import logo from "./download.png";

 export default function Header() {
    return (
        <header>
            <nav className="nav-container">
                <img className="react-logo" src={logo} />
                <ul className="nav-items">
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

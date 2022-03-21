import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <ul>
                <li>
                    <NavLink exact to = "/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to = "/Characters">
                        Characters
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to = "/Books">
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to = "/Films">
                        Films
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
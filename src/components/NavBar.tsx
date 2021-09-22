import React, { Children, FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import "../css/NavBar.css";

interface NavLinkProps {
    to: string;
    text?: string;
    children?: ReactNode;
}

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="deckbuilder">Deck Builder</NavLink>
        </nav>
    );
};

const NavLink: FC<NavLinkProps> = ({ to, children }) => {
    return (
        <Link to={to} className="Link">
            <div className="NavLink">{Children.toArray(children)}</div>
        </Link>
    );
};

export default NavBar;

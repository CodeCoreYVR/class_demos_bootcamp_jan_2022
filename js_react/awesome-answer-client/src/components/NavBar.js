import React from 'react';

import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
    return(
        <nav>
            <NavLink to='/questions'>Question Index</NavLink>
            |
            <NavLink to='questions/new'>Question New</NavLink>
        </nav>
    )
}

export default NavBar;


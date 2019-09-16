import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav id='navbar'>
            <ul id='navbar-list'>
                <li className='navbar-item'>
                    <NavLink key='home' to='/' exact activeClassName='navbar-selected'>
                        Kaan Donbekci
                </NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink key='projects' to='/projects' activeClassName='navbar-selected'>
                        Projects
                    </NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink key='education' to='/education' activeClassName='navbar-selected'>
                        Education
                    </NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink key='resume' to='/resume' activeClassName='navbar-selected'>
                        Resume
                    </NavLink>
                </li>
                {/* <li className='navbar-item'>
                    <NavLink key='stats' to='/stats' activeClassName='navbar-selected'>
                        Stats
                    </NavLink>
                </li> */}
                <li className='navbar-item'>
                    <NavLink key='contact' to='/contact' activeClassName='navbar-selected'>
                        Contact
                    </NavLink>
                </li>
                <li id="navbar-dummy"></li>
            </ul>
        </nav>
    );
};

export default Nav;
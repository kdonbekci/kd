import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

    return (
        <section id='nav'>
            <h1>Nav</h1>
            <ul>
                <li id='main' className='nav-item'>
                    <NavLink key='home' to='/' activeClassName='nav-selected'>
                        Kaan Donbekci
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink key='projects' to='/projects' activeClassName='nav-selected'>
                        Projects
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink key='education' to='/education' activeClassName='nav-selected'>
                        Education
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink key='resume' to='/resume' activeClassName='nav-selected'>
                        Resume
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink key='stats' to='/stats' activeClassName='nav-selected'>
                        Stats
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink key='contact' to='/contact' activeClassName='nav-selected'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </section>
    );
};

export default Nav;
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../style/style.css';

const Nav = (props) => {

    return (
        <section id='nav'>
            <div id='nav-main'>
                <NavLink key='home' to='/' exact activeClassName='nav-selected'>
                    Kaan Dönbekci
                </NavLink>
            </div>
            <ul>
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
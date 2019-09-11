import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { prettyProject } from '../../../helpers/prettyNames';

const Sidebar = (props) => {
    return (
        <section id='sidebar'>
            <h1>Sidebar</h1>
            <ul>
                {
                    props.items.map(item => {
                        return (
                            <li key={item.name} className='sidebar-item'>
                                <NavLink key={item.name} to={`/projects/${item.name}`} activeClassName='sidebar-selected'>
                                    {prettyProject(item.name)}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Sidebar;
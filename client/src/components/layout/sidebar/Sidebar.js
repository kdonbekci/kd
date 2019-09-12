import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../style/style.css';


const Sidebar = (props) => {
    const url = props.url;
    const pretty = props.pretty;

    return (
        <section id='sidebar'>
            <h1>Sidebar</h1>
            <ul>
                {
                    props.items.map(item => {
                        return (
                            <li key={item.name} className='sidebar-item'>
                                <NavLink key={item.name} to={{
                                    pathname: `/${url}/${item.name}`,
                                    state: { project: item }
                                }} activeClassName='sidebar-selected'>
                                    {pretty ? pretty(item.name) : item.name}
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
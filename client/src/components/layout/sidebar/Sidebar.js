import React, { Fragment } from 'react';

const Sidebar = (props) => {
    
    return (
        <aside id={props.id}>
                {props.content}
        </aside>
    );
};

export default Sidebar;
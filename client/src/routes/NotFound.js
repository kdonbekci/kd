import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
    let error;
    if (props.location.state) {
        error = props.location.state.error;
    }

    return (
        <section id='body'>
            <h1> * 404 Page Not Found * </h1>
            {error && <p>{error.message}</p>}
            <Link to="/">
                <button id='error-button'><span>Back home</span></button>
            </Link>
        </section >
    );
};

export default NotFound;
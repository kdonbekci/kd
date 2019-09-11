import React, { Fragment } from 'react';
import {Sidebar, CollapsedSidebar} from '../components/layout';

const SingleProject = ({project}) => {
    return (
        <Fragment>
            <CollapsedSidebar />
            <h1>SingleProject page</h1>
        </Fragment>
    );
};

export default SingleProject;
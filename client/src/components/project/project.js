import React, { Fragment } from 'react';
import Markdown from 'react-markdown';
import { timeSince } from '../../helpers/prettyDates';

const Project = (props) => {
    const project = props.project;

    return (
        <Fragment>
            <div id='time-info'>
                <ul>
                    <span id='time-related'>
                        <li>{`Last updated ${project && timeSince(project.updatedAt)} ago.`}</li>
                        <li>{`Created ${project && timeSince(project.createdAt)} ago.`}</li>
                    </span>
                    <span id='languages'>
                    </span>
                </ul>
            </div>
            <div id='report'>
                <Markdown source={project && project.report} />
            </div>
        </Fragment>
    );
}

export default Project;

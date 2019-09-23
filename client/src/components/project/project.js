import React, { Fragment } from 'react';
import Markdown from 'react-markdown';
import { timeSince } from '../../helpers/prettyDates';


const Project = (props) => {
    const project = props.project;
    let totalBytes = 0
    if (project) {
        project.languages.forEach(l => {
            totalBytes += l.size
        });
    }
    return (
        project ?
            <Fragment>
                <h1 id='project-title'> {project.name} </h1>
                <div>
                    <ul id='time-info'>
                        <li>{`Last updated ${timeSince(project.updatedAt)} ago.`}</li>
                        <li>{`Created ${timeSince(project.createdAt)} ago.`}</li>
                        <li> <a target="_blank" rel="noopener noreferrer" href={project.url} id='project-link'> View on GitHub</a>
                        </li>
                    </ul>
                    <ul id='languages'>
                        {project.languages.map((language, i) => {
                            return <li key={i}>{language.name}: {(100 * language.size / totalBytes).toFixed(1)}% </li>
                        })}
                    </ul>
                    <div className="clear"></div>
                </div>
                {project.fallbackToReadme ?
                    <div id='report'>
                        <Markdown source={project.report} />
                        <p>Will show the README file instead...</p>
                        <Markdown source={project.readme} />
                    </div> :
                    <div id='report'>
                        <Markdown source={project.report} />
                    </div>
                }

            </Fragment> :
            null
    );
}

export default Project;

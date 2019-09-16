import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { prettyProject } from '../../../helpers/prettyNames';
import icons from '../../../helpers/icons'

const ProjectsSidebar = (props) => {
    const projects = props.projects;
    const content = (
        <nav id='projects-sidebar-nav'>
            {projects &&
                <ul>
                    {
                        projects.map(project => {
                            return (
                                <li key={project.name} className='sidebar-item'>
                                    <NavLink className='project-link' key={project.name} to={{
                                        pathname: `/projects/${project.name}`,
                                        state: { project, projects }
                                    }} activeClassName='sidebar-selected'>
                                        {`${prettyProject(project.name)} `}
                                    </NavLink>
                                    <div className='topic-icons'>
                                        {project.topics.sort().map((topic, i) => {
                                            if (icons[topic]) {
                                                return (
                                                    <div key={i} className='topic-icon'>
                                                        <i className={icons[topic]} title={topic} />
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </nav>
    )
    return (
        <Sidebar id='projects-sidebar' content={content} />
    );
};

export default ProjectsSidebar;
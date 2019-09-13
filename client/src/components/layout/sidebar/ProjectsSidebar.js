import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { prettyProject } from '../../../helpers/prettyNames';


const ProjectsSidebar = (props) => {
    const projects = props.projects;
    // console.log('ProjectsSidebar-projects', projects);
    const content = (
        <nav id='projects-sidebar-nav'>
            {projects &&
                <ul>
                    {
                        projects.map(project => {
                            return (
                                <li key={project.name} className='sidebar-item'>
                                    <NavLink key={project.name} to={{
                                        pathname: `/projects/${project.name}`,
                                        state: { project, projects }
                                    }} activeClassName='sidebar-selected'>
                                        {prettyProject(project.name)}
                                    </NavLink>
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
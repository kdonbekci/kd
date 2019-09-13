import React, { Component, Fragment } from 'react';
import { ProjectsSidebar } from '../components/layout';
import { Redirect } from 'react-router-dom';
import Counter from '../helpers/counter';
import { timeSince } from '../helpers/prettyDates';
import { getAllProjects } from '../helpers/api';
import ProjectsOverview from '../components/project/ProjectsOverview';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: null,
            redirect: null,
            overview: null,
            error: null,
        };
    }

    componentDidMount() {
        if (!this.state.projects) {
            getAllProjects()
                .then(projects => {
                    this.setState({ projects });
                    // this.generateOverview();
                })
                .catch((err) => {
                    console.error(err);
                    // this.setState({
                    //     redirect: status == 404 ? '/not-found' : '/internal-error',
                    //     error: payload.error
                    // })
                });
        }
    }

    render() {
        return (
            this.state.redirect ?
                <Redirect to={{
                    pathname: this.state.redirect,
                    state: { error: this.state.error }
                }} />
                :
                <Fragment>
                    <ProjectsSidebar projects={this.state.projects} />
                    <section id='content'>
                        <ProjectsOverview projects={this.state.projects} />
                    </section>
                </Fragment>
        );
    }
}

export default Projects;
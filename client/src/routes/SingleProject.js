import React, { Component, Fragment } from 'react';
import { ProjectsSidebar } from '../components/layout';
import { getAllProjects, getProjectByName } from '../helpers/api';
import Project from '../components/project/Project'

import axios from 'axios';

class SingleProject extends Component {
    constructor(props) {
        console.log('SingleProject constructor');
        super(props);

        this.state = {
            error: null,
            redirect: null,
            ...this.props.location.state //seed data for the newly created component.
        }
    };

    componentDidMount() {
        console.log('SingleProject componentDidMount');
        if (!this.state.projects) {
            getAllProjects()
                .then(projects => {
                    this.setState({ projects });
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        if (!this.state.project) {
            const name = this.props.match.params.id
            getProjectByName(name)
                .then(project => {
                    this.setState({ project });
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('SingleProject getDerivedStateFromProps', props, state)
        if (props.location.state && state.project) {
            if (props.location.state.project &&  state.project.name != props.location.state.project.name){
                return {project: props.location.state.project}
            }
        }
        return null
    }

    render() {
        console.log('SingleProject render');
        return (
            <Fragment>
                <ProjectsSidebar projects={this.state.projects} />
                <section id='content'>
                    <Project project={this.state.project} />
                </section>
            </Fragment>
        );
    }
};

export default SingleProject;
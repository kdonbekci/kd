import React, { Component, Fragment } from 'react';
import { Sidebar } from '../components/layout';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            redirect: null,
            overview: null,
            error: null,
        };
    }
    componentDidMount() {
        axios.get('/projects')
            .then(res => {
                const payload = res.data;
                if (!payload.success) throw Error;
                this.setState({ projects: payload.data });
                this.generateOverview();
            })
            .catch((err) => {
                const payload = err.response.data;
                const status = err.response.status;
                this.setState({
                    redirect: status == 404 ? '/not-found' : '/internal-error',
                    error: payload.error
                })
            });
    }

    generateOverview() {
        const projects = this.state.projects;
        const topics = {}
        const languages = {}
        const lastUpdated = { project: null, when: null };
        let totalLines = 0;
        projects.forEach(project => {
            project.languages.forEach(language => {
                if (languages[language.name]) {
                    languages[language.name].size += language.size
                } else {
                    languages[language.name] = {
                        size: language.size,
                        color: language.color,
                    }
                }
            });
        });
        console.log(languages);
    }

    render() {
        let body;
        if (!this.redirect) {
            body = (
                <Fragment>
                    <h1>Projects</h1>
                    <p><span className='tip'>Tip: You can expand the projects on the sidebar.</span> <br />
                        Here is some overview about my projects. <br />
                    </p>
                </Fragment>
            )
        }
        return (
            this.state.redirect ?
                <Redirect to={{
                    pathname: this.state.redirect,
                    state: { error: this.state.error }
                }} />
                :
                <Fragment>
                    <Sidebar items={this.state.projects} />
                    <section id='body'>
                        {body}
                    </section>
                </Fragment>
        );
    }
}

export default Projects;
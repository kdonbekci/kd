import React, { Component, Fragment } from 'react';
import { Sidebar } from '../components/layout';
import { Redirect } from 'react-router-dom';
import { prettyProject } from '../helpers/prettyNames';
import { PieChart } from '../components/plotting';
import Counter from '../helpers/counter';

import axios from 'axios';
import { timeSince } from '../helpers/prettyDates';

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
                console.error(err);
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
        let topics = []
        const languages = {}
        const lastUpdated = {
            name: projects[0].name,
            when: timeSince(projects[0].updatedAt)
        };
        projects.forEach(project => {
            topics.push(project.topics);
            project.languages.forEach(language => {
                if (languages[language.name]) {
                    languages[language.name].size += language.size
                } else {
                    languages[language.name] = {
                        size: language.size,
                        color: language.color,
                        name: language.name
                    }
                }
            });
        });
        const plotData = Object.values(languages);
        topics = [].concat(...topics);
        const topicsCounter = Counter(topics);
        console.log(topicsCounter)
        const overview = (
            <Fragment>
                <h1>Projects</h1>
                <p><span className='tip'>Tip: You can expand the projects on the sidebar.</span> <br />
                    Here is some overview about my projects. <br />
                </p>
            </Fragment>
        )
        this.setState({overview});


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
                    <section id='body'>
                        <Sidebar url='projects' pretty={prettyProject} items={this.state.projects} />
                        <section id='content'>
                            {this.state.overview}
                        </section>
                    </section>
                </Fragment>
        );
    }
}

export default Projects;
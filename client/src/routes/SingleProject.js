import React, { Component, Fragment } from 'react';
import { Sidebar, CollapsedSidebar } from '../components/layout';
import Markdown from 'react-markdown';
import { timeSince } from '../helpers/prettyDates';
import {StackedBarChart} from '../components/plotting';
import Project from '../components/project/Project'
// import * as d3 from "d3";

import axios from 'axios';

class SingleProject extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, redirect: null, ...props.location.state }
    };

    componentDidMount() {
        if (!this.state.project) {
            const projectName = this.props.match.params.id;
            axios.get(`/projects/${projectName}`)
                .then(res => {
                    const payload = res.data;
                    if (!payload.success) throw Error;
                    this.setState({ project: payload.data });
                    this.drawChart();
                })
                .catch(err => {
                    const payload = err.response.data;
                    const status = err.response.status;
                    this.setState({
                        redirect: status == 404 ? '/not-found' : '/internal-error',
                        error: payload.error
                    })
                });
        }
    }

    render() {
        const project = this.state.project
        return (
            <Fragment>
                <CollapsedSidebar />
                <section id='body'>
                    <h1 id='title'>{project.name}</h1>
                    <div id='subtitle'>
                        <ul>
                            <span id='time-related'>
                                <li>{`Last updated ${timeSince(project.updatedAt)} ago.`}</li>
                                <li>{`Created ${timeSince(project.createdAt)} ago.`}</li>
                            </span>
                            <span id='languages'>
                                <StackedBarChart data={project.languages}/>
                            </span>
                        </ul>
                    </div>
                    <div id='report'>
                        <Markdown source={project.report} />
                    </div>
                </section>
            </Fragment>
        );


    }
};

export default SingleProject;
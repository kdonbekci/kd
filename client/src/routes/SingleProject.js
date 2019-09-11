import React, { Component, Fragment } from 'react';
import { Sidebar, CollapsedSidebar } from '../components/layout';
import Markdown from 'react-markdown';

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
        return (
            <Fragment>
                <CollapsedSidebar />
                <section id='body'>
                    <h1>SingleProject page</h1>
                    <div>
                        <Markdown source={this.state.project.report} />
                    </div>
                </section>
            </Fragment>
        );


    }
};

export default SingleProject;
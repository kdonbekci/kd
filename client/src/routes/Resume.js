import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { BioSidebar } from '../components/layout'

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <BioSidebar />
                <section id='content'>
                    <h1>Resume page</h1>
                </section>
            </Fragment>
        );
    }
}

export default Resume;
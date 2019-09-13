import React, { Component, Fragment } from 'react';
import { BioSidebar } from '../components/layout';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Fragment>
                <BioSidebar />
                <section id='content'>
                    <h1>Home page</h1>
                </section>
            </Fragment>
        );
    }
}

export default Home;
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
                    <h1>Welcome to my personal website!</h1>
                    <br />
                    <h2>A little about me...</h2>
                    <p>
                        I am an aspiring data scientist/analyst currently finishing my undergraduate degree at Stanford University. <br />
                        I major in Symbolic Systems, <a target="_blank" rel="noopener noreferrer" href='https://symsys.stanford.edu/'>which combines Computer Science, Linguistics, Psychology, and Statistics</a> (& a minor in Biology). <br />
                        I will be graduating in January 2020 and looking forward to seeking employment from then on. <br />
                        My interests lay in health, psychology, and finance. <br />
                        You can find some projects I have been working on <a href='/projects'>here.</a> <br />
                        My favorite show is Planet Earth II (<a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=Rv9hn4IGofM'>best part</a>).<br />
                        And please don't hesitate to <a href='/contact'>get in touch.</a>!
                    </p>

                </section>
            </Fragment>
        );
    }
}

export default Home;
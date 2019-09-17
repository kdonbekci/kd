import React, { Fragment } from 'react';
import { BioSidebar } from '../components/layout'

const Education = (props) => {
    return (
        <Fragment>
            <BioSidebar />
            <section id='content'>
                <h1>University:</h1>
                <br/>
                <h2>Stanford University</h2>
                <p>September 2016 - January 2020</p> 
                <p>Bachelor of Science in <a target="_blank" rel="noopener noreferrer" href='https://symsys.stanford.edu/'>Symbolic Systems</a> (Artifical Intelligence track)</p>
                <p>Minor in Biology</p>
                <br/>
                <h2>Harvard University</h2>
                <p>June 2015 - September 2015</p> 
                <p>Summer Program in Public Speaking and Communication</p>
                <br/>
                <h1>Highschool:</h1>
                <br/>
                <h2><a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Robert_College'>Robert College</a></h2>
                <p>September 2011 - June 2016</p> 
            </section>
        </Fragment>
    );
};

export default Education;
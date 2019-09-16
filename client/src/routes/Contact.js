import React, { Fragment } from 'react';
import { BioSidebar } from '../components/layout'

const Contact = (props) => {
    return (
        <Fragment>
            <BioSidebar />
            <section id='content'>
                <p>I hope you enjoyed browsing through my website! <br />
                    
                    You can get in touch with me via <a target="_blank" rel="noopener noreferrer" href='mailto:kdonbekci@gmail.com'>
                        email
                    </a>
                    .
                </p>
            </section>
        </Fragment>
    );
};

export default Contact;
import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { BioSidebar } from '../components/layout';
import { getResume } from '../helpers/api';
// import { Document, Page, pdfjs} from 'react-pdf';


class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            downloadUrl: null
        };
    }
    componentDidMount() {
        getResume()
            .then(resume => {
                const url = window.URL.createObjectURL(new Blob([resume]
                    , { type: 'application/pdf' }));
                this.setState({ downloadUrl: url });
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <Fragment>
                <BioSidebar />
                <section id='content'>
                    <p>Click below to download my resume. Hope to get in touch soon!
                    <br />
                        {
                            this.state.downloadUrl &&
                            <a href={this.state.downloadUrl} download='KaanDonbekci_Resume.pdf' >
                                Download resume.
                        </a>
                        }
                    </p>
                </section>
            </Fragment>
        );
    }
}

export default Resume;
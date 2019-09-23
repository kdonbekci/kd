import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { prettyProject } from '../../../helpers/prettyNames';
import { Nav } from '..';


class BioSidebar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activePhoto: 'kaan-1.jpg'
        };
    }


    componentDidMount() {
        // this.generateContent();
    }

    render() {
        const content = (
            <section id='bio-sidebar-intro'>
                <img id='my-photo' src={`${process.env.PUBLIC_URL}/images/${this.state.activePhoto}`}
                    alt='my photo' />
                <p>Hello there, <br /> <br />
                    I'm Kaan and I love all things data. <br /> <br />
                    I <NavLink to='/projects/kd' >built this website</NavLink> to anounce
                and demonstrate my affection to data. <br /> <br />
                    I will be <NavLink to='/education' >graduating this winter</NavLink> from Stanford
                    and looking forward to pursuing my passion ... </p>
            </section>
        );
        return (
            <Sidebar id='bio-sidebar' content={content} />
        )
    }
};



export default BioSidebar;
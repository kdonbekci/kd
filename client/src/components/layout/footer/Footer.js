import React, { Fragment } from 'react';

const Footer = (props) => {
    const social = {
        github: {
            link: 'https://github.com/kdonbekci/',
            icon: <i className="fab fa-github"></i>
        },
        facebook: {
            link: 'https://www.facebook.com/kaan.donbekci',
            icon: <i className="fab fa-facebook-f"></i>
        },
        linkedin: {
            link: 'https://www.linkedin.com/in/kaan-donbekci-b22b21b8/',
            icon: <i className="fab fa-linkedin-in"></i>
        },
        mail: {
            link: 'mailto:kdonbekci@gmail.com',
            icon: <i className="far fa-envelope-open"></i>
        }
    }
    const socialKeys = ['github', 'facebook', 'linkedin', 'mail']

    return (
        <section id='footer'>
            <h1>Footer</h1>
            <ul id='social'>
                {
                    socialKeys.map(key => {
                        return (
                            <li key={key}>
                                <a href={social[key].link}>
                                    {social[key].icon}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Footer;
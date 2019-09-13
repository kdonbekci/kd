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
    const socialKeys = ['github', 'linkedin', 'facebook', 'mail']

    return (
        <footer id='footer'>
            <ul id='social-list'>
                {
                    socialKeys.map(key => {
                        return (
                            <li className='social-item' key={key}>
                                <a target="_blank" rel="noopener noreferrer" href={social[key].link}>
                                    {social[key].icon}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <p id='copyright-notice'>&copy; Kaan Dönbekci 2019</p>
        </footer>
    );
};

export default Footer;
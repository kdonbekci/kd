import React, { Fragment } from 'react';
import { timeSince } from '../../helpers/prettyDates';
import icons from '../../helpers/icons';

const ProjectsOverview = (props) => {
    return (
        <Fragment>
            <p id='project-overview'>
                Feel free to browse through my projects on the sidebar. <br />
                They are sorted based on creation time. <br />
                The icons next to them hint to their topics.
                </p>
            <br/>
            <div className='topic-icons'>
                {Object.keys(icons).sort().map((topic, i) => {
                    return (
                        <div key={i} className='topic-icon-help'>
                            <p>
                            <i className={icons[topic]} title={topic} />
                            : {topic}</p>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    );
}


// const generateOverview = (projects) => {
//     let topics = []
//     const languages = {}
//     const lastUpdated = {
//         name: projects[0].name,
//         when: timeSince(projects[0].updatedAt)
//     };
//     projects.forEach(project => {
//         topics.push(project.topics);
//         project.languages.forEach(language => {
//             if (languages[language.name]) {
//                 languages[language.name].size += language.size
//             } else {
//                 languages[language.name] = {
//                     size: language.size,
//                     color: language.color,
//                     name: language.name
//                 }
//             }
//         });
//     });
//     const plotData = Object.values(languages);
//     topics = [].concat(...topics);
//     const topicsCounter = Counter(topics);
//     const overview = (
//         <Fragment>
//             <h1>Projects</h1>
//             <p><span className='tip'>Tip: You can expand the projects on the sidebar.</span> <br />
//                 Here is some overview about my projects. <br />
//             </p>
//         </Fragment>
//     )
//     this.setState({ overview });
// }

export default ProjectsOverview;

import React, { Fragment } from 'react';
import { timeSince } from '../../helpers/prettyDates';

const ProjectsOverview = (props) => {
    return (
        <Fragment>
            <h1>ProjectsOverview</h1>
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

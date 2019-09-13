import axios from 'axios';

const getAllProjects = async () => {
    console.log('-API- getAllProjects called')
    const res = await axios.get('/projects');
    const payload = await res.data;
    if (!payload.success){
        throw Error;
    }
    const projects = await payload.data
    return projects;
}

export default getAllProjects
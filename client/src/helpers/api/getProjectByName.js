import axios from 'axios';

const getProjectByName = async (name) => {
    console.log('-API- getProjectByName called')
    const res = await axios.get(`/projects/${name}`);
    const payload = await res.data;
    if (!payload.success){
        throw Error;
    }
    const projects = await payload.data
    return projects;
}

export default getProjectByName
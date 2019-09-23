import axios from 'axios';

const getProjectByName = async (name) => {
    if(process.env.NODE_ENV == 'development') console.log('-API- getProjectByName called');
    const res = await axios.get(`${process.env.REACT_APP_API}/projects/${name}`);
    const payload = await res.data;
    if (!payload.success){
        throw Error;
    }
    const projects = await payload.data
    return projects;
}

export default getProjectByName
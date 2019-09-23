import axios from 'axios';

const getAllProjects = async () => {
    if(process.env.NODE_ENV == 'development') console.log('-API- getAllProjects called');
    const res = await axios.get(`${process.env.REACT_APP_API}/projects`);
    const payload = await res.data;
    if (!payload.success){
        throw Error;
    }
    const projects = await payload.data
    return projects;
}

export default getAllProjects
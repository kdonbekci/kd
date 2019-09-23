import axios from 'axios';

const getAllProjects = async () => {
    console.log('-API- getAllProjects called')
    console.log(process.env);
    const res = await axios.get(`${process.env.REACT_APP_API}/projects`);
    const payload = await res.data;
    if (!payload.success){
        throw Error;
    }
    const projects = await payload.data
    return projects;
}

export default getAllProjects
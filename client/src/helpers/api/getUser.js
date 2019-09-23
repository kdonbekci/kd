import axios from 'axios';

const getUser = async () => {
    if(process.env.NODE_ENV == 'development') console.log('-API- getUser called');
    const res = await axios.get(`${process.env.REACT_APP_API}/user`);
    const payload = await res.data;
    if (!payload.success){
        throw Error;
    }
    const user = await payload.data
    return user;
}

export default getUser
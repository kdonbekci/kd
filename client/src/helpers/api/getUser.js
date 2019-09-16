import axios from 'axios';

const getUser = async () => {
    console.log('-API- getUser called')
    const res = await axios.get('/user');
    const payload = await res.data;
    if (!payload.success){
        throw Error;
    }
    const user = await payload.data
    return user;
}

export default getUser
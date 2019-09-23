import axios from 'axios';

const getResume = async () => {
    console.log('-API- getResume called')
    const res = await axios.get(`${process.env.REACT_APP_API}/resume`, {responseType: 'arraybuffer'});
    const resume = await res.data;
    return resume;
}

export default getResume
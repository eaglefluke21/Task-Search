import axios from 'axios';

const apiAxios = axios.create({
    baseURL:'https://task-search-node.vercel.app',
});

export default apiAxios;
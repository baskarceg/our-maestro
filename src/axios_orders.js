import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://maestro-rosh.firebaseio.com/'
})

export default instance;
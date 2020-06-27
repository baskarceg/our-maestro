import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://my-burger-app-b748b.firebaseio.com/'
})

export default instance;
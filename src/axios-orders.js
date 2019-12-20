import axios from 'axios';

export default axios.create({
    baseURL : 'https://burger-builder-a0429.firebaseio.com/',
});
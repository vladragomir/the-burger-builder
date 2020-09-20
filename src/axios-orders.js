import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://the-burger-builder-1a9f3.firebaseio.com/',
});

export default instance;

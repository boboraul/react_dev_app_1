import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-dev-app-1-backend.onrender.com/posts'
})
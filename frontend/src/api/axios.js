import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://bong-cake-api.vercel.app',
    headers: {
        'Content-Type': 'application/json',

    },
    withCredentials: true, 
})

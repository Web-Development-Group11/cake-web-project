import { axiosClient } from './axios'

export const fetcher = async (url) => {
    try {
        const response = await axiosClient.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
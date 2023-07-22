import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: 'RettGyNtRcGqCERFzZOsyzJBIV7ZE_7YeW-8H6ix8B0',
  },
});

class APIUnsplash {
  getAllImages = () => {
    return axiosInstance.get('/photos').then(res => res.data);
  };
}

export const apiUnsplash = new APIUnsplash();

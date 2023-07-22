import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: 'RettGyNtRcGqCERFzZOsyzJBIV7ZE_7YeW-8H6ix8B0',
  },
});

class APIUnsplash {
  getImages = page => {
    return axiosInstance.get('/photos', { params: { page } });
  };
}

export const apiUnsplash = new APIUnsplash();

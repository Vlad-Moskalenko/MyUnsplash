import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: 'RettGyNtRcGqCERFzZOsyzJBIV7ZE_7YeW-8H6ix8B0',
  },
});

class APIUnsplash {
  getImages = page => {
    return axiosInstance
      .get('/photos', { params: { page } })
      .then(resp => resp.data);
  };

  getImageDetails = slug => {
    return axiosInstance.get(`/photos/${slug}`).then(resp => resp.data);
  };

  getImagesByTag = (tag, page) => {
    return axiosInstance
      .get('/search/collections', {
        params: {
          query: tag,
          page,
        },
      })
      .then(resp => resp.data.results);
  };

  getImagesByQuery = (query, page) => {
    return axiosInstance
      .get('/search/photos', {
        params: {
          query,
          page,
        },
      })
      .then(resp => resp.data.results);
  };
}

export const apiUnsplash = new APIUnsplash();

import axios from "axios" 

const axioClient = axios.create({
  baseURL: 'https://super-sheldon1.onrender.com',
  timeout: 15000, 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axioClient.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.url);
    console.log('Request config:', config);
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
axioClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
    }
    return Promise.reject(error);
  }
);

export default axioClient ;

import axios from 'axios';

const buildClient = ({ req }) => {
  // on server
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'www.ticketing-app-prod-jacky.xyz',
      headers: req.headers,
    });
  } else {
    // on browser
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;

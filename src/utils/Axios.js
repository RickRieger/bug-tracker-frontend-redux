import axios from 'axios';
const Axios = axios.create({
  baseURL:
    process.env.REACT_APP_AXIOS !== 'development'
      ? 'http://localhost:8080/api'
      : 'https://bug-tracker-app-backend.herokuapp.com/api',
  timeout: 50000,
});
export default Axios;

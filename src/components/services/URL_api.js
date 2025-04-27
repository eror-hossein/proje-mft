import axios from 'axios';  

const fachdata = axios.create({  
    baseURL: 'https://6794d533aad755a134ea8a4f.mockapi.io',  
});  

export default fachdata;    
import axios from "axios";

const instance = axios.create({
    baseURL:"https://us-central1-fir-8b960.cloudfunctions.net/api",
        //"http://localhost:5001/fir-8b960/us-central1/api",
    //THE API (cloud function ) URL
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
});

export default instance;
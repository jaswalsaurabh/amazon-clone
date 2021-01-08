import axios from 'axios';
const instance = axios.create({
    //THE API(cloud function url) URL
    baseURL:'http://localhost:5001/whatsapp-clone-5c8a7/us-central1/api' 
})

export default instance;
import axios  from "axios";
import {dataApi} from '../../../config/api'


const instance = axios.create({dataApi});


instance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;
});


export {instance};
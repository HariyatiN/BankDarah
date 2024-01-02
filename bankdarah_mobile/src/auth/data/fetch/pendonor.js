import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { instance } from "../axios";


const getPendonor  = async ()=>{
        try {
            const response = await instance.get('/pendonor', FormData, {
                header:{ 'content-Type' : 'multipart/from-data'}
            });
            return response.data;
        } catch (error) {
             throw new Error(error.response.data.message ||'something went wrong')
        }
}


const getPendonorById = async (id)=>{
    try {
        const response = await instance.get(`/pendonor/${id}`)
    } catch (error) {
        
    }

}





  export{ getPendonor
  }
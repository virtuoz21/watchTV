import { useState, useEffect } from "react";
import axios from "axios";

function useRequest (search) {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        async function makeRequest(){
          try{
            if(search.length >= 3){
            const response = await axios.get(`http://dolphin-app-pc6ii.ondigitalocean.app/article/popular`);
            setApiData(response.data);
          }
          }catch(error){
            console.error(error);
          }
        }
        makeRequest()
      }, [search]);
    
      return apiData;
}

export default useRequest;
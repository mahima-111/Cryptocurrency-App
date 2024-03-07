import axios from "axios";
import { useEffect, useState } from "react";

const useApiCall = (endpoint) => {
    const API_URL='https://api.coingecko.com/api/v3/';

    const [result,setResult]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [err,setErr]=useState('');
    const callFunc=async (endpoint)=>{
        try{
            setIsLoading(true);
            const {data}=await axios.get(`${API_URL}${endpoint}x-cg-demo-api-key=${import.meta.env.VITE_API_KEY}`);
            setResult(data);
            setIsLoading(false);
        }
        catch(err){
            setErr(err);
        }
    }
    useEffect(()=>{
        callFunc(endpoint);
    },[]);
    
    return [result,isLoading,err];
}

export default useApiCall
import PercentageChange2 from "../utils/PercentageChange2";
import useApiCall from "../utils/useApiCall";
import '../index.css'
import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const SimilarCoinsData = () => {
    const [data,isLoading,err]=useApiCall('search/trending?')

    const [startIndex,setStartIndex]=useState(0);
    const [endIndex,setEndIndex]=useState(4);

    const handlePrev=()=>{
        setStartIndex(startIndex-1);
        setEndIndex(endIndex-1);
    }
    const handleNext=()=>{
        setStartIndex(startIndex+1);
        setEndIndex(endIndex+1);
    }

    if(isLoading || data.length===0){
        return <h2 className="pb-4 pt-10 text-xl font-semibold">Data is loading..</h2>;
    }
    else if(err){
        return <h2 className="pb-4 pt-10 text-xl font-semibold">ERROR: {err}</h2>;
    }
    else{

    return (
    <div className="slider-container text-black mb-4 overflow-hidden">
    <div className="mt-4 flex gap-4 relative">
        {data.coins.slice(startIndex,endIndex+1).map((elem)=>{
            const {coin_id,small,symbol}=elem?.item;
            const {price,sparkline}=elem?.item.data;
            const {usd}=elem?.item.data?.price_change_percentage_24h;
            const change=usd.toFixed(2);
            return <div key={coin_id} className="flex flex-col gap-3 border-2 rounded-lg min-w-fit w-[16rem] p-5 mr-4">
                <div className="flex gap-1 items-center">
                    <img src={small} className="w-7"/>
                    <h4 className="font-normal text-md">{symbol}</h4>
                    <PercentageChange2 changeValue={change}/>
                </div>
                <h3 className="font-medium text-xl">{price}</h3>
                <img src={sparkline} className="w-36 self-center"/>
            </div>
        })}
    </div>

    {startIndex>0 && <button onClick={handlePrev} className="p-2 text-gray-500 shadow-lg rounded-full absolute translate-x-[-1rem] translate-y-[-7rem] bg-white"><GrFormPrevious size={25}/></button>}

    {endIndex<data.coins.length-1 && <button onClick={handleNext} className="p-2 text-gray-500 shadow-lg rounded-full absolute translate-x-[19rem] sm:translate-x-[27rem] md:translate-x-[44rem] lg:translate-x-[68rem] translate-y-[-7rem] bg-white"><GrFormNext size={25}/></button>}
    </div>
    )
    }
}

export default SimilarCoinsData
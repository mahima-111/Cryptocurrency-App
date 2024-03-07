import PercentageChange from "../utils/PercentageChange";
import useApiCall from "../utils/useApiCall";

const TrendingCoinsData = () => {
    const [data,isLoading,err]=useApiCall('search/trending?')
    if(isLoading || data.length===0){
        return <h2 className="pb-4 pt-10 text-xl font-semibold">Data is loading..</h2>;
    }
    else if(err){
        return <h2 className="pb-4 pt-10 text-xl font-semibold">ERROR: {err}</h2>;
    }
    else{
        const dispData=data.coins.slice(0,3);
        return (
            <div className="mt-4">
                {dispData.map((elem)=>{
                    const {coin_id,small,name,symbol}=elem?.item;
                    const {usd}=elem?.item.data?.price_change_percentage_24h;
                    const change=usd.toFixed(2);
                    return <div key={coin_id} className="flex justify-between mb-6 items-center">
                        <div className="flex gap-1 items-center">
                            <img src={small} className="w-8"/>
                            <h4 className="font-medium text-md">{`${name} (${symbol})`}</h4>
                        </div>
                        <PercentageChange changeValue={change}/>
                    </div>
                })}
            </div>
        )
    }
    
}

export default TrendingCoinsData
import PercentageChange from "../utils/PercentageChange";
import useApiCall from "../utils/useApiCall";

const BitcoinData = () => {
    const [data,isLoading,err]=useApiCall('simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true&');
    
    if(isLoading || data.length===0){
        return <h2 className="pb-4 pt-10 text-xl font-semibold">Data is loading..</h2>;
    }
    else if(err){
        return <h2 className="pb-4 pt-10 text-xl font-semibold">ERROR: {err}</h2>;
    }
    else{
        const {inr,usd,usd_24h_change}=data?.bitcoin;
        const fixedInr=parseInt(inr.toFixed(0));
        console.log(typeof(fixedInr));
    const formattedInr=fixedInr.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    const formattedUsd=usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const formattedChange=usd_24h_change.toFixed(2);
    return (
        <div className="pb-4 pt-10">
            <div className="flex items-center gap-4">
            <h2 className="text-3xl font-semibold">{formattedUsd}</h2>
            <PercentageChange changeValue={formattedChange}/>
            </div>
            <h3 className="text-md font-medium mt-2">{formattedInr}</h3>
        </div>
    )
    }
    
}

export default BitcoinData
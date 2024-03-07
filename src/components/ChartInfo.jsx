import TradingViewWidget from "./TradingViewWidget";
import bitcoin from '../assets/bitcoin.png'
import BitcoinData from "./BitcoinData";

const ChartInfo = () => {
    
return (
    <div className="bg-white rounded-md p-3 lg:p-6 border-[1.5px] lg:border-0">
        <div>
            <div className="flex gap-6">
                <div className="flex gap-2 items-center">
                    <img src={bitcoin} className="h-8 w-8"/>
                    <h3 className="text-2xl font-semibold">Bitcoin</h3>
                    <h4 className="text-md font-semibold text-gray-500 ">BTC</h4>
                </div>
                <div className="px-2 py-2 rounded-lg bg-gray-500 text-white text-md font-medium">Rank #1</div>
            </div>
            
            <BitcoinData/>
            <hr/>
            <TradingViewWidget />
        </div>
    </div>
)
}

export default ChartInfo
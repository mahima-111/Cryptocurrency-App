import TrendingCoinsData from "./TrendingCoinsData";

const TrendingCoins = () => {
    return (
        <div className="bg-white rounded-md p-3 lg:p-6 flex flex-col gap-4 lg:mb-5">
            <h3 className="text-2xl font-semibold">Trending Coins (24h)</h3>
            <TrendingCoinsData/>
        </div>
    )
}

export default TrendingCoins
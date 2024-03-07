import SimilarCoinsData from "./SimilarCoinsData"

const SimilarCoins = () => {
    return (
        <div className="bg-white rounded-md py-6 px-3 lg:px-16 flex flex-col gap-4 mb-5 w-full">
            <h3 className="text-2xl font-semibold">You May Also Like</h3>
            <SimilarCoinsData/>

            <h3 className="text-2xl font-semibold">Treding Coins</h3>
            <SimilarCoinsData/>
        </div>
    )
}

export default SimilarCoins
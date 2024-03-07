const ProgressBars = () => {
    return (
        <div className="w-[17rem] lg:w-[30rem] flex flex-col gap-3 text-gray-500 font-medium ">
            <div className="flex items-center ">
                <span className="text-md w-14">Buy</span>
                <div className="w-[76%] h-2 rounded-sm bg-emerald-500 mr-3"></div>
                <span className="text-sm">76%</span>
            </div>
            <div className="flex items-center ">
                <span className="text-md w-14">Hold</span>
                <div className="w-[8%] h-2 rounded-sm bg-gray-300 mr-3"></div>
                <span className="text-sm">8%</span>
            </div>
            <div className="flex items-center ">
                <span className="text-md w-14">Sell</span>
                <div className="w-[16%] h-2 rounded-sm bg-red-500/95 mr-3"></div>
                <span className="text-sm">16%</span>
            </div> 
        </div>
    )
}

export default ProgressBars
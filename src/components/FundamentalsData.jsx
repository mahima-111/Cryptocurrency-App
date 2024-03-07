import { arr1,arr2 } from "../utils/FundamentalsArr";
const FundamentalsData = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between mb-10">
            <div className="flex flex-col lg:w-[47%]">
                {arr1.map(({id,data,value})=>{
                    return <div key={id}>
                    <div className="flex justify-between text-sm font-medium mb-4 mt-4">
                        <h5 className="text-gray-500">{data}</h5>
                        <h4>{value}</h4>
                    </div>
                    <hr/>
                    </div>
                })}
            </div>

            <div className="flex flex-col lg:w-[47%]">
                {arr2.map(({id,data,value})=>{
                    return <div key={id}>
                    <div className="flex justify-between text-sm font-medium mb-4 mt-4">
                        <h5 className="text-gray-500">{data}</h5>
                        <h4>{value}</h4>
                    </div>
                    <hr/>
                    </div>
                })}
                <div>
                    <div className="flex justify-between text-sm font-medium mb-2 mt-2">
                        <h5 className="text-gray-500">All-Time High</h5>
                        <div>
                            <h4>$69,044.77 <span className="text-red-500">-75.6%</span></h4>
                            <h5 className="text-xs text-gray-700">Nov 10, 2021 (about 1 year)</h5>
                        </div>
                    </div>
                    <hr/>
                </div>

                <div>
                    <div className="flex justify-between text-sm font-medium mb-2 mt-2">
                        <h5 className="text-gray-500">All-Time Low</h5>
                        <div>
                            <h4>$67.81 <span className="text-emerald-400">24729.1%</span></h4>
                            <h5 className="text-xs text-gray-700">Jul 06, 2013 (over 9 years)</h5>
                        </div>
                    </div>
                    <hr/>
                </div>

            </div>
        </div>
    )
}

export default FundamentalsData
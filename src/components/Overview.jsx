import { RiInformationFill } from "react-icons/ri";
import FundamentalsData from "./FundamentalsData";
import PerformanceSlider from "./PerformanceSlider";
const Overview = () => {
    return (
        <div className="bg-white rounded-md p-3 lg:p-6 flex flex-col gap-4 mt-7 lg:mt-0 mb-5 border-[1.5px] lg:border-0">
            <h3 className="text-2xl font-semibold">Performance</h3>

            <PerformanceSlider/>
            <h4 className='font-semibold text-lg flex gap-1 items-center text-gray-600'>Fundamentals<span className="text-gray-400"><RiInformationFill/></span></h4>

            <FundamentalsData/>
            
        </div>
    )
}

export default Overview
import { RiInformationFill } from "react-icons/ri";
import ProgressBars from "../utils/ProgressBars";
import SentimentSlider from "./SentimentSlider";
const Sentiment = () => {
    return (
        <div className="bg-white rounded-md p-3 lg:p-6 flex flex-col gap-4 mb-5">
            <h3 className="text-2xl font-semibold">Sentiment</h3>
            <h4 className='font-semibold text-lg flex gap-1 items-center text-gray-600'>Key Events<span className="text-gray-500"><RiInformationFill/></span></h4>

            <SentimentSlider/>

            <h4 className='font-semibold text-lg flex gap-1 items-center text-gray-600'>Analyst Estimates<span className="text-gray-500"><RiInformationFill/></span></h4>

            <div className="flex gap-2 lg:gap-10 items-center pb-6">
                <div className="flex justify-center items-center p-5 rounded-full text-emerald-500 bg-emerald-100/50 h-32 w-32">
                    <span className="font-medium text-4xl">76</span>
                    <span className="text-md font-medium">%</span>
                </div>

                <ProgressBars/>
            </div>
        </div>
    )
}

export default Sentiment
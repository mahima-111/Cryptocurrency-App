import { GoTriangleUp } from "react-icons/go";

const PerformanceSlider = () => {
return (
    <div>
        <div className="flex items-center justify-between mt-4">
            <div className="flex flex-col justify-center">
                <div className="font-normal text-sm mb-3">Today's Low</div>
                <div className="font-medium text-md relative pb-3">46,930.22</div>
            </div>
            <div className="w-[11rem] lg:w-[30rem] self-end">
                <div className="flex flex-col justify-center ">
                    <div className="w-full h-[0.3rem] rounded-full custom-gradient" ></div>
                    <div className="w-fit ml-[8rem] lg:ml-[20rem] flex flex-col items-center">
                        <GoTriangleUp/>
                        <span className="text-sm font-normal">$48,637.83</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="font-normal text-sm mb-3">Today's High</div>
                <div className="font-medium text-md pb-3">49,343.83</div>
            </div>
        </div>

        <div className="flex items-center justify-between mt-4 mb-4">
            <div className="flex flex-col justify-center">
                <div className="font-normal text-sm mb-3">52W Low</div>
                <div className="font-medium text-md relative pb-3">16,930.22</div>
            </div>
            <div className="w-[11rem] lg:w-[30rem]">
                <div className="w-full h-[0.3rem] rounded-full custom-gradient" ></div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="font-normal text-sm mb-3">52W High</div>
                <div className="font-medium text-md pb-3">49,743.83</div>
            </div>
        </div>
    </div>
)
}

export default PerformanceSlider
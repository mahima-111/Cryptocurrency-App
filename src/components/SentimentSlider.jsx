import { FaNewspaper } from "react-icons/fa6";
import { LuTrendingUp } from "react-icons/lu";

function SentimentSlider() {
    return (
        <div className="flex flex-col lg:flex-row overflow-auto gap-4 mb-6 ">
            <div className="flex bg-blue-100/70 rounded-lg p-4 gap-3 lg:w-[39rem]">
                <div className="bg-blue-500/95 text-white rounded-full h-10 w-12 p-3"><FaNewspaper/></div>
                <div>
                <h3 className="font-medium text-sm mb-4">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h3>
                <p className="font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                </div>
            </div>

            <div className="flex bg-emerald-50 rounded-lg p-4 gap-3 lg:w-[39rem]">
                <div className="bg-emerald-500/95 text-white rounded-full h-10 w-12 p-2"><LuTrendingUp size={25}/></div>
                <div>
                <h3 className="font-medium text-sm mb-4">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h3>
                <p className="font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                </div>
            </div>
        </div>
    );
}

export default SentimentSlider;

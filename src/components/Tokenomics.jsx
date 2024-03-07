import donutChart from '../assets/donut_chart.png';
import { FaCircle } from "react-icons/fa";
const Tokenomics = () => {
return (
    <div className="bg-white rounded-md p-6 flex flex-col gap-3 mb-5">
        <h3 className="text-2xl font-semibold">Tokenomics</h3>
        <h4 className="text-lg font-bold">Initial Distribution</h4>
        <div className='flex items-center gap-4'>
            <img src={donutChart} className='h-40 w-36'/>
            <div>
            <div className='flex gap-2 items-center mb-1'>
            <span className='text-blue-500 '><FaCircle size={12}/></span>
            <h6 className='text-md font-medium'> Crowdsale investors: 80%</h6>
            </div>
            <div className='flex gap-2 items-center'>
            <span className='text-orange-400'><FaCircle size={12}/></span>
            <h6 className='text-md font-medium'>Foundation: 20%</h6>
            </div>
            </div>
        </div>

        <p className='font-medium text-md mb-8'>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
    </div>
)
}

export default Tokenomics
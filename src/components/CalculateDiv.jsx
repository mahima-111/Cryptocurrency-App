import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import ButtonComponent from '../utils/ButtonComponent';
const CalculateDiv = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-8'>
            <div className='p-3 rounded-md blue-gradient flex gap-6'>
                <img src={pic1} className='rounded-lg h-32 w-32 object-cover' />
                <div className='flex flex-col '>
                    <h3 className='text-white font-bold text-xl'>Calculate your </h3>
                    <h3 className='text-white font-bold text-xl mb-4 lg:mb-1'>Profits</h3>
                    <ButtonComponent text='Check Now'/>
                </div>
            </div>

            <div className='p-3 rounded-md red-gradient flex gap-6'>
                <img src={pic2} className='rounded-lg h-32 w-32 object-cover' />
                <div className='flex flex-col'>
                    <h3 className=' text-white font-bold text-xl'>Calculate your tax</h3>
                    <h3 className='text-white font-bold text-xl mb-4 lg:mb-1'>liability</h3>
                    <ButtonComponent text='Check Now'/>
                </div>
            </div>
        </div>
    )
}

export default CalculateDiv
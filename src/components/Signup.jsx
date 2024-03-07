import getStarted from '../assets/get_started.png';
import getStartedSmall from '../assets/get_started_small.png';
import ButtonComponent from '../utils/ButtonComponent';

const Signup = () => {
    return (
        <div className='signup-box rounded-xl p-6 text-white flex flex-col items-center gap-3 mb-5'>
            <img src={getStartedSmall} className='lg:hidden object-cover w-[40%]'/>
            <div className='flex gap-2 lg:flex-col mb-4 lg:mb-0 lg:items-center'>
            <h3 className='text-2xl lg:text-xl font-semibold'>Get Started with KoinX</h3>
            <h3 className='text-2xl lg:text-xl font-semibold'>for FREE</h3>
            </div>
            <p className='text-md lg:text-sm mb-2 lg:mb-0 text-center lg:text-left'>With our range of features that you can equip fro free,KoinX allows you to be more educated and aware of your tax reports.</p>
            <img src={getStarted} className='object-cover w-[60%] my-2 hidden lg:inline-block' />
            <ButtonComponent text='Get Started for FREE' />
        </div>
    )
}

export default Signup
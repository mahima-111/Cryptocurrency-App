import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const [nav,setNav]=useState(false);
    return (
        <nav className='flex justify-between px-14 py-3 items-center bg-white'>
            <h1 className='text-4xl font-bold text-blue-600'>Koin<span className="text-orange-400">X</span></h1>
            <div className='lg:flex items-center hidden relative'>
                <ul className="flex text-md font-semibold gap-6">
                    <li>Crypto Taxes</li>
                    <li>Free Tools</li>
                    <li>Resource Center</li>
                </ul>
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-md font-semibold ml-6">Get Started</button>
            </div>

            <button onClick={()=>{
                setNav(!nav);
            }} className="lg:hidden absolute right-6 top-4 z-20">
                {nav?<IoClose size={30}/>:<FaBars size={23}/>}
            </button>

            <div className={nav?"flex flex-col justify-center items-center gap-10 w-[70vw] h-screen duration-300 absolute top-0 right-0 overflow-hidden bg-white/90 z-10":"flex flex-col justify-center items-center gap-10 h-screen w-0 duration-300 absolute top-0 right-0 overflow-hidden bg-white/90 z-10"}>
                <ul className="text-md font-semibold gap-10 flex flex-col justify-center items-center">
                    <li>Crypto Taxes</li>
                    <li>Free Tools</li>
                    <li>Resource Center</li>
                </ul>
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-md font-semibold ml-6">Get Started</button>
            </div>
        </nav>
    )
}

export default Navbar
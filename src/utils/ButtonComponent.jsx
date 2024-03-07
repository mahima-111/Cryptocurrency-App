import { FaArrowRight } from "react-icons/fa6";
const ButtonComponent = ({text}) => {
    return (
        <button className="px-4 py-2 rounded-md bg-white text-md font-semibold text-black flex gap-2 items-center">
            {text}
            <FaArrowRight/>
        </button>
    )
}

export default ButtonComponent
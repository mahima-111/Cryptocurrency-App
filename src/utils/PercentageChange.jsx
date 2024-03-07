import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

const PercentageChange = ({changeValue}) => {
    let isNegative=false;
    let dispValue=changeValue;
    if (changeValue<0){
        isNegative=true;
        dispValue=Math.abs(changeValue);
    }
    return (
        <h4 className={isNegative?"font-medium text-md flex items-center gap-2 bg-red-100 text-red-400 rounded-md px-1 py-[0.15rem]":"font-medium text-md flex items-center gap-2 bg-emerald-100 text-emerald-400 rounded-md px-2 py-[0.15rem]"}>
            <span>{isNegative?<GoTriangleDown/>:<GoTriangleUp/>}</span>
            {dispValue}%
        </h4>
    )
}

export default PercentageChange
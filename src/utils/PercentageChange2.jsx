
const PercentageChange2 = ({changeValue}) => {
    let isNegative=false;
    let dispValue=changeValue;
    if (changeValue<0){
        isNegative=true;
        dispValue=Math.abs(changeValue);
    }
    return (
        <h4 className={isNegative?"font-normal text-xs flex items-center bg-red-100 text-red-400 rounded-sm px-1 py-[0.15rem]":"font-normal text-xs flex items-center bg-emerald-100 text-emerald-400 rounded-sm px-1 py-[0.15rem]"}>
            <span>{isNegative?'-':'+'}</span>
            {dispValue}%
        </h4>
    )
}

export default PercentageChange2
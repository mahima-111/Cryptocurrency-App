const SubNavbar = () => {
    return (
        <div className="overflow-hidden my-6">
            <ul className="flex  border-b-[1.5px] border-gray-300 text-md text-gray-600 gap-8 lg:gap-6 font-medium ">
            <li className="text-blue-600 border-b-2 border-blue-600 py-2">Overview</li>
            <li className="py-2">Fundamentals</li>
            <li className="py-2 min-w-fit">News Insights</li>
            <li className="py-2">Sentiments</li>
            <li className="py-2">Team</li>
            <li className="py-2">Technicals</li>
            <li className="py-2">Tokenomics</li>
        </ul>
        <hr/>
        </div>
    )
}

export default SubNavbar
import CalculateDiv from "./CalculateDiv"

const About = () => {
    return (
        <div className="bg-white rounded-md p-3 lg:p-6 flex flex-col gap-4 mb-5 border-[1.5px] lg:border-0">
            <h3 className="text-2xl font-semibold">About Bitcoin</h3>

            <h4 className="text-lg font-bold">What is Bitcoin?</h4>
            <p className="text-gray-700 font-medium text-md">Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BТС.</p>

            <hr/>

            <h4 className="text-lg font-bold">Lorem ipsum dolor sit amet</h4>
            <p className="text-gray-700 font-medium text-md">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>

            <p className="text-gray-700 font-medium text-md">Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>

            <p className="text-gray-700 font-medium text-md">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
            <hr/>

            <h3 className="text-2xl font-semibold">Already Holding Bitcoin?</h3>

            <CalculateDiv/>
            <div className="hidden lg:block">
            <hr/>
            <p className="text-gray-700 font-medium text-md">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
            </div>
        </div>
        
    )
}

export default About
import About from "./components/About"
import ChartInfo from "./components/ChartInfo"
import Navbar from "./components/Navbar"
import Overview from "./components/Overview"
import Sentiment from "./components/Sentiment"
import Signup from "./components/Signup"
import SimilarCoins from "./components/SimilarCoins"
import SubNavbar from "./components/SubNavbar"
import Team from "./components/Team"
import Tokenomics from "./components/Tokenomics"
import TrendingCoins from "./components/TrendingCoins"

function App() {
    return <div className="w-full overflow-x-hidden">
        <Navbar/>
        <div className="bg-gray-100 px-4 lg:px-14">
        <div className="flex gap-2 text-gray-400 text-md font-medium py-4">
            <h4>Cryptocurrencies</h4>
            <h4>{'>>'}</h4>
            <h4 className="text-black">Bitcoin</h4>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
            <div id='left-side' className="lg:w-[67%]">
                <ChartInfo />
                <SubNavbar/>
                <Overview/>
                <Sentiment/>
                <About/>
                <div className="hidden lg:block"><Tokenomics/></div>
                <Team/>
                <div className="lg:hidden"><SimilarCoins/></div>
            </div>
            
            <div id='right-side' className="lg:w-[30%]">
                <Signup/>
                <div className="hidden lg:block"><TrendingCoins/></div>
            </div>
        </div>
        </div>
        <div className="w-full lg:hidden"><TrendingCoins/></div>
        <div className="hidden lg:block"><SimilarCoins/></div>
    </div>
}

export default App

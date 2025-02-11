import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import CrimeHeatmap from "../HeatMap/CrimeHeatmap";
import HowItWorks from "../HowItWorks/HowItWorks";
import RecentCrimeList from "../RecentCrime/RecentCrimeList";
import TopContributors from "../TopContributors/TopContributors";
import WhyChoseUs from "../WhyChoseUs/WhyChoseUs";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
       <Banner/>
       <RecentCrimeList/>
       <WhyChoseUs/>
       <HowItWorks/>
       <CrimeHeatmap/>
       <TopContributors/>
       <CallToAction/>
        </div>
    );
};

export default Home;
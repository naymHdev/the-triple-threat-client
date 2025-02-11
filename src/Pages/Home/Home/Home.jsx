import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import RecentCrimeList from "../RecentCrime/RecentCrimeList";
import WhyChoseUs from "../WhyChoseUs/WhyChoseUs";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
       <Banner/>
       <RecentCrimeList/>
       <WhyChoseUs/>
       <HowItWorks/>
        </div>
    );
};

export default Home;
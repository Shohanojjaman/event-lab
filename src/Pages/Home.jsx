import HeroSection from '../Components/utilities/HeroSection';
import LatestBlogs from '../Components/utilities/LatestBlogs';
import PopularEvents from '../Components/utilities/PopularEvents';
import Service from '../Components/utilities/Service';

const Home = () => {
  return (
    <div>
      {/* Hero / Banner Section */}
      <HeroSection />
      {/* Service */}
      <Service />
      {/* Popular Event */}
      <PopularEvents />
      {/* Latest Blogs */}
      <LatestBlogs />
    </div>
  );
};

export default Home;

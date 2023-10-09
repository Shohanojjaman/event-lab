import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-area py-28">
      <div className="container mx-auto flex items-center h-full">
        <div className="w-1/2 flex flex-col items-center h-full gap-6" data-aos="fade-right">
          <h1 className="text-[65px] font-extrabold">
            Seamless Corporate Event Solutions with <span className="text-theme">E</span>vent{' '}
            <span className="text-theme">L</span>ab
          </h1>
          <div className="flex self-start gap-4" data-aos="fade-up">
            <Link to={'/about'} className="primary-btn">
              About Us
            </Link>
            <Link to={'/login'} className="secondary-btn">
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end" data-aos="fade-left">
          <img src={'https://i.ibb.co/GPVpKhz/hero-figure.png'} alt="" className="" />
        </div>
      </div>
      ;
    </div>
  );
};

export default HeroSection;

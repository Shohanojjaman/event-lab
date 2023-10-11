import { BsCalendarWeek } from 'react-icons/bs';
import { FaHandshake, FaPeopleGroup } from 'react-icons/fa6';
import { GiBalloons, GiClown, GiWineGlass } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { Ri24HoursFill } from 'react-icons/ri';
import BGTitle from './BGTitle';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <div className="bg-secondary-bg py-8">
      <div className="container mx-auto">
        <BGTitle title="Services" />
        <SectionTitle subTitle="Services" mainTitle="Our Services" />

        {/* Services Area */}
        <div className="grid grid-cols-4 ">
          <ServiceCard icon={<FaHandshake />} title="friendly team" subtitle="more than 200 teams" />
          <ServiceCard icon={<GiWineGlass />} title="Unique Scenario" subtitle="we thinking out of the box" />
          <ServiceCard icon={<GiBalloons />} title="perfect venues" subtitle="perfect venues" />
          <ServiceCard icon={<Ri24HoursFill />} title="24/7 hours support" subtitle="anitime anywhere" />
          <ServiceCard icon={<GiClown />} title="Unforgettable Times" subtitle="The best times I've ever had" />
          <ServiceCard
            icon={<HiOutlineLightBulb />}
            title="Brilliant Idea"
            subtitle="I have come across a brilliant idea."
          />
          <ServiceCard icon={<BsCalendarWeek />} title="Unique Scenario" subtitle="more than 200 teams" />
          <ServiceCard icon={<FaPeopleGroup />} title="Best Management" subtitle="more than 200 teams" />
        </div>
      </div>
    </div>
  );
};

export default Service;

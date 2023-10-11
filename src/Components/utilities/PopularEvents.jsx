import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/DataContextProvider';
import BGTitle from './BGTitle';
import EventCard from './EventCard';
import SectionTitle from './SectionTitle';

const PopularEvents = () => {
  const { events } = useContext(DataContext);

  const ranNum = Math.round(Math.random() * 13);
  return (
    <div className="bg-secondary-bg py-8">
      <div className="container mx-auto">
        <BGTitle title="Events"></BGTitle>
        <SectionTitle subTitle="Events" mainTitle="popular events"></SectionTitle>
        {/* Event Section */}
        <div className="grid grid-cols-3 gap-6">
          {events.slice(ranNum, ranNum + 6).map((event, index) => (
            <EventCard key={event?.id} event={event} index={index}></EventCard>
          ))}
        </div>
        <button className="primary-btn mx-auto mt-8 block">
          <Link to={'/events'}>show all</Link>
        </button>
      </div>
    </div>
  );
};

export default PopularEvents;

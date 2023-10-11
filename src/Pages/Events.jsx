import { useContext } from 'react';
import { DataContext } from '../Components/Context/DataContextProvider';
import EventCard from '../Components/utilities/EventCard';
import PageTitle from '../Components/utilities/PageTitle';
import SectionTitle from '../Components/utilities/SectionTitle';

const Events = () => {
  const { events } = useContext(DataContext);

  return (
    <>
      <PageTitle title="Events" />

      {/* Event Section */}
      <div className="container mx-auto bg-secondary-bg py-16">
        <SectionTitle mainTitle="Popular Events" />
        <div className="grid grid-cols-3 gap-6">
          {events?.map((event, index) => (
            <EventCard key={event?.id} event={event} index={index}></EventCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;

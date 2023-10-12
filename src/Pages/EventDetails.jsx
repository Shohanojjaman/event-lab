import moment from 'moment';
import { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsBlockquoteLeft, BsCalendarWeek, BsDiagram3, BsInfoCircle, BsLightning, BsMegaphone } from 'react-icons/bs';
import { FiUserPlus } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { RiGalleryFill } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../Components/Context/DataContextProvider';
import BGTitle from '../Components/utilities/BGTitle';
import PageTitle from '../Components/utilities/PageTitle';

const EventDetails = () => {
  const { id } = useParams();
  const { events } = useContext(DataContext);
  const thisEvent = events?.find((event) => event.id === id);
  console.log(thisEvent);
  const {
    title,
    bg_image,
    date,
    description,
    event_organizer,
    gallery_images,
    event_type,
    location,
    main_features,
    total_rating,
    sponsors,
    seat,
  } = thisEvent || {};
  return (
    <div>
      <PageTitle title="Events" subTitle={title} />
      <div className="container mx-auto">
        <BGTitle title="Events Details" />
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <img src={bg_image} className="w-full rounded-lg" alt={`Image of ${title}`} />
            <div className="flex justify-between py-5">
              <div className="flex gap-2 items-center text-base text-heading">
                <BsCalendarWeek></BsCalendarWeek>
                <p className="font-semibold">{moment(date).format('MMMM DD, YYYY')}</p>
              </div>
              <div className="flex gap-2 items-center text-theme text-xl">
                <BsDiagram3></BsDiagram3>
                <p className=" font-semibold">{seat} Seat</p>
              </div>
              <div className="flex gap-2 items-center text-base text-heading">
                <IoLocationOutline></IoLocationOutline>
                <p className=" font-semibold">{location}</p>
              </div>
            </div>
            <div className="flex justify-between py-5 border-y px-6 border-[#eeeeee]">
              <div className="flex gap-2 items-center text-base text-heading">
                <BsBlockquoteLeft className="text-xl text-theme"></BsBlockquoteLeft>
                <div>
                  <h6 className="font-bold">Event Type</h6>
                  <p className="text-xs">{event_type}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center text-base text-heading">
                <BsMegaphone className="text-xl text-theme"></BsMegaphone>
                <div>
                  <h6 className="font-bold">Speaker</h6>
                  <p className="text-xs">10 Best Speaker</p>
                </div>
              </div>
              <div className="flex gap-2 items-center text-base text-heading">
                <BsLightning className="text-xl text-theme"></BsLightning>
                <div>
                  <h6 className="font-bold">Sponsor</h6>
                  <p className="text-xs">Event Lab</p>
                </div>
              </div>
              <div className="space-y-2 items-center text-base text-heading">
                <div className="flex">
                  <AiFillStar className="text-[#ffc107]" />
                  <AiFillStar className="text-[#ffc107]" />
                  <AiFillStar className="text-[#ffc107]" />
                  <AiFillStar className="text-[#ffc107]" />
                  <AiFillStar className="text-[#ffc107]" />
                </div>
                <h6 className="font-bold text-center">{`(${total_rating})`}</h6>
              </div>
            </div>

            <div className="py-12">
              <div className="w-fit flex items-center justify-center gap-3 font-semibold text-lg text-white bg-theme rounded-md border-2 border-theme py-2 px-11 ">
                <BsInfoCircle className="text-xl" />
                <p>Event Details</p>
              </div>
              <div className="space-y-3 py-6">
                <h2 className="text-2xl text-heading font-semibold capitalize">{title}</h2>
                <p className="text-[#515154] leading-loose">{description}</p>
                <h2 className="text-xl text-heading font-semibold capitalize">Main Features</h2>
                <ul className="list-image-[url(https://i.ibb.co/SvyR6Cy/check-mark.jpg)] list-inside">
                  {main_features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h2 className="text-xl text-heading font-semibold capitalize">This Event Sponsors</h2>
                <div className="flex gap-4 py-8">
                  {sponsors?.map((sponsor, index) => (
                    <Link key={index} className="w-full">
                      <img className="w-40 " src={sponsor} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-fit flex items-center justify-center gap-3 font-semibold text-lg text-white bg-theme rounded-md border-2 border-theme py-2 px-11">
                <RiGalleryFill className="text-xl" />
                <p>Gallery</p>
              </div>
              <div className="grid grid-cols-2 py-4 gap-4">
                {gallery_images?.map((image, index) => (
                  <img key={index} src={image} className="rounded-lg h-full w-full object-cover" />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center gap-3 font-semibold w-fit text-lg text-white bg-theme rounded-r-lg border-2 border-theme py-2 px-11">
              <FiUserPlus className="text-xl" />
              <p>Event Organizer</p>
            </div>
            <img src={event_organizer?.organizer_image} className="w-2/5 mx-auto" alt="" />
            <h4 className="text-heading text-center font-bold text-2xl">{event_organizer?.name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

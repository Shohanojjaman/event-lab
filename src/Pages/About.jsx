import LatestBlogs from '../Components/utilities/LatestBlogs';
import PageTitle from '../Components/utilities/PageTitle';
import Service from '../Components/utilities/Service';

const About = () => {
  return (
    <div>
      <PageTitle title="About us" />

      <div className="container mx-auto">
        {/* About Event Lab */}
        <div className="py-12">
          <fieldset className="border-2 border-[#ce144633] px-10 pt-5 pb-12">
            <legend className="text-4xl font-bold text-theme mx-20 px-5 ">EventLab Story</legend>
            <div className="space-y-6">
              <p className="leading-loose text-[#515154] text-lg">
                Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat metus tortor eget magna.
                Donec mattis posuere pharetra. Donec vestibulum ornare velit ut sollicitudin. Pellentesque in faucibus
                purus.Nulla nisl tellus, hendrerit nec dignissim pellentesque, posuere in est. Suspendisse bibendum
                vestibulum elit eu placerat. In ut ipsum in odio euismod tincidunt non lacinia nunc. Donec ligula augue,
                mattis eu varius ac, tempus vel ex. Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Nam viverra porttitor urna, quis ultricies turpis euismod et. Ut sapien quam,
                iaculis eu purus at, egestas pharetra nisi. Cras tristique.
              </p>
              <p className="leading-loose text-[#515154] text-lg">
                mauris convallis molestie lacinia, orci massa lobortis felis, at auctor ipsum leo sit amet diam. Donec
                vel euismod erat, at gravida metus. Quisque nunc quam, pretium ornare tristique sed, porttitor id
                dolor.Nulla nisl tellus, hendrerit nec dignissim pellentesque, posuere in est. Suspendisse bibendum
                vestibulum elit eu placerat. In ut ipsum in odio euismod tincidunt non lacinia nunc. Donec ligula augue,
                mattis eu varius ac, tempus vel ex. Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Nam viverra porttitor urna, quis ultricies turpis euismod et. Ut sapien quam
                Nulla nisl tellus, hendrerit nec dignissim.
              </p>
            </div>
          </fieldset>
        </div>
      </div>
      {/* Services */}
      <Service />
      <LatestBlogs />
    </div>
  );
};

export default About;

import { useContext } from 'react';
import { DataContext } from '../Components/Context/DataContextProvider';
import BlogsCard from '../Components/utilities/BlogsCard';
import PageTitle from '../Components/utilities/PageTitle';
import SectionTitle from '../Components/utilities/SectionTitle';

const Blogs = () => {
  const { blogs } = useContext(DataContext);

  return (
    <>
      <PageTitle title="Blogs" />

      {/* Blogs Section */}
      <div className="container mx-auto py-16">
        <SectionTitle mainTitle="Popular Events" />
        <div className="grid grid-cols-3 gap-6">
          {blogs?.map((blog, index) => (
            <BlogsCard key={event?.id} blog={blog} index={index}></BlogsCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;

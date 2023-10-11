import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/DataContextProvider';
import BGTitle from './BGTitle';
import BlogsCard from './BlogsCard';
import SectionTitle from './SectionTitle';

const LatestBlogs = () => {
  const { blogs } = useContext(DataContext);
  console.log(blogs);

  const randomNub = Math.round(Math.random() * 4);
  console.log(randomNub);

  return (
    <div className="container mx-auto py-8">
      <BGTitle title="latest blog" />
      <SectionTitle subTitle="Blogs" mainTitle="latest blog" />

      {/* Latest Blogs */}
      <div className="grid grid-cols-3 gap-6">
        {blogs.slice(randomNub, randomNub + 6).map((blog, index) => (
          <BlogsCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>
      <button className="primary-btn mx-auto mt-8 block">
        <Link to={'/blogs'}>show all</Link>
      </button>
    </div>
  );
};

export default LatestBlogs;

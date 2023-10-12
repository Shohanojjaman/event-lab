import ComingSoon from '../Components/utilities/ComingSoon';
import PageTitle from '../Components/utilities/PageTitle';

const BlogDetails = () => {
  return (
    <div>
      <PageTitle title="Blogs" subTitle={'Blogs Details'} />
      <div className="container mx-auto py-12">
        <ComingSoon page="Blogs Details"></ComingSoon>
      </div>
    </div>
  );
};

export default BlogDetails;

import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../Context/AuthContextProvider';

const SocialLogIn = () => {
  const { googleLogIn, githubLogIn } = useContext(AuthContext);
  const handleSocialLogIn = (media) => {
    media()
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => handleSocialLogIn(googleLogIn)}
        className="flex items-center justify-center gap-2 border-2 border-[#4385f3] rounded-lg p-3 w-full text-[#4385f3] hover:text-white hover:bg-[#4385f3] font-semibold text-xl transition-all duration-300">
        <FaGoogle></FaGoogle> Login with Google
      </button>
      <button
        onClick={() => handleSocialLogIn(githubLogIn)}
        className="flex items-center justify-center gap-2 border-2  border-gray-700 rounded-lg p-3 w-full text-gray-700 hover:text-white hover:bg-gray-700 font-semibold text-xl transition-all duration-300">
        <FaGithub></FaGithub> Login with Github
      </button>
    </div>
  );
};

export default SocialLogIn;

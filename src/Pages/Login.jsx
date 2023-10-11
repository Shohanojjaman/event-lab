import { Card, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContextProvider';
import SocialLogIn from '../Components/utilities/SocialLogin';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const email = form.get('email'); // User's Email
    const password = form.get('password'); // User's Password

    // Login a user
    logIn(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location?.state : '/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero-area py-28 min-h-screen">
      <div className="container mx-auto h-full flex items-center justify-center">
        <Card className="w-2/5">
          <h3 className="text-4xl text-center font-bold mt-6 mb-3 capitalize">Login your accunt!</h3>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" className="text-lg capitalize text-heading font-semibold" />
              </div>
              <TextInput id="email" name="email" placeholder="user@example.com" required type="email" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Your password"
                  className="text-lg capitalize text-heading font-semibold"
                />
              </div>
              <TextInput id="password" name="password" required type="password" placeholder="*******" />
            </div>
            <button className="primary-btn" type="submit">
              Log in
            </button>
          </form>
          <div className="divider">OR</div>
          <SocialLogIn />
          <p className="text-center">
            Don&apos;t have a account?{' '}
            <Link to={'/register'} className="text-theme font-semibold ">
              Register
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;

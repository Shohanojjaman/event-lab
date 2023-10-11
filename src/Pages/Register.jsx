import { Card, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContextProvider';
import SocialLogIn from '../Components/utilities/SocialLogin';

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const displayName = form.get('name'); // User's display name
    const email = form.get('email'); // User's Email
    const photoPath = form.get('photo'); // User's Photo Path URL
    const password = form.get('password'); // User's Password

    // Register a user
    createUser(email, password);
    updateUser(displayName, photoPath);
  };
  return (
    <div className="hero-area py-28 min-h-screen">
      <div className="container mx-auto h-full flex items-center justify-center">
        <Card className="w-2/5">
          <h3 className="text-4xl text-center font-bold mt-6 mb-3 capitalize">Register a account!</h3>
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="name" className="text-lg capitalize text-heading font-semibold" />
              </div>
              <TextInput id="name" name="name" placeholder="John Doe" required type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="email" className="text-lg capitalize text-heading font-semibold" />
              </div>
              <TextInput id="email" name="email" placeholder="user@example.com" required type="email" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="photo" value="photo path" className="text-lg capitalize text-heading font-semibold" />
              </div>
              <TextInput id="photo" name="photo" placeholder="https://www.example.com/user.jpg" type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="password" className="text-lg capitalize text-heading font-semibold" />
              </div>
              <TextInput id="password" name="password" required type="password" placeholder="*******" />
            </div>
            <button className="primary-btn" type="submit">
              Register
            </button>
          </form>
          <div className="divider">OR</div>
          <SocialLogIn />
          <p className="text-center">
            Already have a account?{' '}
            <Link to={'/login'} className="text-theme font-semibold ">
              Login
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Register;

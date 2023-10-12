import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';
import About from '../Pages/About';
import BlogDetails from '../Pages/BlogDetails';
import Blogs from '../Pages/Blogs';
import EventDetails from '../Pages/EventDetails';
import Events from '../Pages/Events';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/events/:id',
        element: <EventDetails />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default MainRoutes;

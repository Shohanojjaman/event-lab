import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';
import Home from '../Pages/Home';

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
        element: <>About</>,
      },
      {
        path: '/events',
        element: <>Events</>,
      },
      {
        path: '/blogs',
        element: <>Blogs</>,
      },
      {
        path: '/login',
        element: <>Log In</>,
      },
      {
        path: '/register',
        element: <>Register</>,
      },
    ],
  },
]);

export default MainRoutes;

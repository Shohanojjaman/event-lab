import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <>Home</>,
      },
      {
        path: '/about',
        element: <>About</>,
      },
      {
        path: 'events',
        element: <>Events</>,
      },
      {
        path: '/blog',
        element: <>Blog</>,
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

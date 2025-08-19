import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Error from '../Pages/SharedPages/ErrorPages/Error';
import Homepage from '../Pages/MainPages/Homepage/Homepage';
import Developers from '../Pages/MainPages/Developers/Developers';
import About from '../Pages/MainPages/About/About';
import Contact from '../Pages/MainPages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/developers',
        element: <Developers />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
export default router;

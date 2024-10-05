import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../page/Home/Home';
import Products from '../page/Product/Products';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bonkagoj",
        element: <Products />,
      },
    ],
  },
]);

export default route;
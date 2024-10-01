import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../page/Home/Home';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
        {
            path:'/',
            element:<Home />
        }
    ]
  },
]);

export default route;
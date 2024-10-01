
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import route from './routes/route'

createRoot(document.getElementById('root')!).render(
 <div>
    <App>
      <RouterProvider router={route} />
    </App>
 </div>
)

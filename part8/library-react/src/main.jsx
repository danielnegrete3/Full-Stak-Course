import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MapRouters } from './routers/MapRouters.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter(MapRouters);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

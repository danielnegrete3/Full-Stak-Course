import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import store from './store'
import {Provider} from 'react-redux'
import { MapRouters } from './routers/map';

const router = createBrowserRouter(MapRouters);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
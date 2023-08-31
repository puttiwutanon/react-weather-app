import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import { Home } from './components/home.jsx';
import MapComponent from './components/Map.jsx';
import { Astro } from './components/astro.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/map",
    element: <MapComponent/>,
  },
  {
    path: "/astro",
    element: <Astro/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

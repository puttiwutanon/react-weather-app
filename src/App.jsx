import React from 'react';
import './App.scss';
import 'leaflet/dist/leaflet.css'
import { Sidebar } from './components/sidebar';
import MapComponent from './components/Map';
import { Home } from './components/home';


function App() {
  return (
    <div className="container">
      <Sidebar />
      <Home/>
    </div>
  );
}

export default App;

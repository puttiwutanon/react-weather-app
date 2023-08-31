import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <Link to="/" className="sidebar-items">
            <i class="fa-solid fa-cloud-sun-rain"></i>
            <p>weather</p>
        </Link>
          <Link to="/astro" className="sidebar-items" >
            <i class="fa-solid fa-moon"></i>
            <p>astronomy</p>
          </Link>
          <Link to="/map" className="sidebar-items">
            <i class="fa-solid fa-map"></i>
            <p>map</p>
          </Link>
      </div>
    </div>
  )
}

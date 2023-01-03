import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

function Navbar() {

  return (
    <ul>
      <li>
          <Link to="/searchPage" className='search-link'>Search Activity</Link>
      </li>
      <li>
          <Link to="/favouriteActivities" className='favAct-link'>Favourite Activities</Link>
      </li>
    </ul>
  );
}

export default Navbar
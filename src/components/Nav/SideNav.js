import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'></Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='nav-bar-toggle'>
            <Link to='#' className='menu-bars'></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

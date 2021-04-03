import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import axios from 'axios';

export default function SideNav() {
  const [projectList, setProjectList] = useState([]);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const fetchData = () => {
    axios
      .get('')
      .then((res) => {
        console.log(res);
        setProjectList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <Container> */}
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <input
          placeholder='Search Projects'
          className='nav-menu-search-input'
          type='text'
        />
        <ul className='nav-menu-items'>
          <li className='nav-bar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
        </ul>
      </nav>
      {/* </Container> */}
    </>
  );
}

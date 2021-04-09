import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

import axios from "axios";

import { Container, ListGroup, ListGroupItem } from "reactstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./SideNav.css";

export default function SideNav() {
  const history = useHistory();
  const [projectList, setProjectList] = useState([]);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const fetchData = () => {
    axios
      .get("")
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
      <Router>
        <div className="navbar-sidenav">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <input
              placeholder="Search Projects"
              className="nav-menu-search-input"
              type="text"
            />
            {/* {projectList.map(project => {
            return(
              <ListGroup key={project.id}>
                <span
                  onClick={() => {
                    history.push()
                  }}
                  >
                    <ListGroupItem action className='project-sidenav name'>
                      {project.name}
                    </ListGroupItem>
                  </span>
              </ListGroup>
            )
          })} */}
          </ul>
        </nav>
      </Router>
      {/* </Container> */}
    </>
  );
}

import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/login');
  };

  const email = localStorage.getItem('email');
  return (
    <Fragment>
      <div className="headder-top">
        <nav>
          <div id="logo">
            <h1>
              <Link to="/home"><img alt="" src="assets/images/tree.jpg" width="40" height="40" />Parki we Wroclawiu</Link>
            </h1>
          </div>
          <ul className="menu mt-2">
            <li className="nav-item">
              <span className="navbar-text mr-3">{email}</span>
            </li>
            <li className="active"><Link to="/home">Strona Glowna</Link></li>
            <li className="mx-lg-3 mx-md-2 my-md-0 my-1"><Link to="/parks">Parki</Link></li>
            <li><Link to="/odznaki">Odznaki</Link></li>
            <li><Link to="/ranking">Ranking</Link></li>
            <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
            </li>
            
            <li><button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default Menu;

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
                <nav >
                    <div id="logo">
                        <h1>
                            <Link to="/home"><img alt="" src="assets/images/tree.jpg" width="40" height="40"/>Parki we Wroclawiu</Link>
                            </h1>
                    </div>
                    <label for="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-2">
                    <li className="nav-item">
              <span className="navbar-text mr-3">{email}</span>
            </li>
                        <li className="active">
                        <Link to="/home">Strona Glowna</Link>
                            </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                        <Link to="/about">Parki</Link>
                            </li>
                        <li>
                        <Link to="/odznaki">Odznaki</Link>
                            </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">

                            <label for="drop-2" className="toggle toogle-2">Wiecej <span className="fa fa-angle-down" aria-hidden="true"></span>
                            </label>
                            <a href="#">Wiecej <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                            <input type="checkbox" id="drop-2" />
                            <ul>
                                <li>
                                <Link to="/ranking">Ranking</Link>
                                    </li>
                                <li>
                                <Link to="/blog">Blog</Link>
                                    </li>
                            </ul>
                        </li>
                        <li>
                        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </nav>

            </div>
        </Fragment>
    )
}
export default Menu;
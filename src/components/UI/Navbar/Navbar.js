/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const navbar = (props) => {

  // let homeClass = ["nav-item"];
  // let aboutClass = ["nav-item"];
  // let worldClass = ["nav-item"];
  // let familyClass = ["nav-item"];
  // let friendsClass = ["nav-item"];
  // let discoClass = ["nav-item"];

  // switch (props.path) {
  //   case "/":
  //     homeClass.push("active");
  //     break;
  //   case "/home":
  //     homeClass.push("active");
  //     break;
  //   case "/about":
  //     aboutClass.push("active");
  //     break;
  //   case "/herWorld":
  //     worldClass.push("active");
  //     break;
  //   case "/family":
  //     familyClass.push("active");
  //     break;
  //   case "/friends":
  //     friendsClass.push("active");
  //     break;
  //   default:
  //     discoClass.push("active");
  //     break;

  // }

  return (
    <div className={classes.Navbar}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#ff0048" }}>
        <Link className="navbar-brand" to="/">
          <img src="https://i.ibb.co/T86FM5z/48cdae97-eaa4-45a0-a90a-867fe5c8077d-200x200.png" className="d-inline-block align-top" alt="" loading="lazy" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item" >
              <Link className="nav-link" to="/home">Home</Link>
              {/* <Link className="nav-link" to="/home">Home</Link> */}
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/about">About Mestro</Link>
              {/* <Link className="nav-link" to="/about">About Mestro</Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/herWorld">Maestro's World</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/family">Family</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/friends">Friends</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/videos/1" > Discography </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default navbar;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import classes from './Navbar.module.css';

const navbar = (props) => {

  let homeClass = ["nav-item"];
  let aboutClass = ["nav-item"];
  let worldClass = ["nav-item"];
  let familyClass = ["nav-item"];
  let friendsClass = ["nav-item"];
  let discoClass = ["nav-item"];

  console.log("Navbar");
  console.log(props.path);

  switch (props.path) {
    case "/":
      homeClass.push("active");
      break;
    case "/home":
      homeClass.push("active");
      break;
    case "/about":
      aboutClass.push("active");
      break;
    case "/herWorld":
      worldClass.push("active");
      break;
    case "/family":
      familyClass.push("active");
      break;
    case "/friends":
      friendsClass.push("active");
      break;
    default:
      discoClass.push("active");
      break;

  }

  return (
    <div className={classes.Navbar}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#ff0048" }}>
        <a className="navbar-brand" href="/">
          <img src="https://i.ibb.co/T86FM5z/48cdae97-eaa4-45a0-a90a-867fe5c8077d-200x200.png" className="d-inline-block align-top" alt="" loading="lazy" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={homeClass.join(' ')} >
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className={aboutClass.join(' ')} >
              <a className="nav-link" href="/about">About Mestro</a>
            </li>
            <li className={worldClass.join(' ')}>
              <a className="nav-link" href="/herWorld">Maestro's World</a>
            </li>
            <li className={familyClass.join(' ')}>
              <a className="nav-link" href="/family">Family</a>
            </li>
            <li className={friendsClass.join(' ')}>
              <a className="nav-link" href="/friends">Friends</a>
            </li>
            <li className={discoClass.join(' ')}>
              <a className="nav-link" href="/videos/1" > Discography </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default navbar;
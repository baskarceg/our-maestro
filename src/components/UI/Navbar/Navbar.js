/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ff0048" }}>
      <a className="navbar-brand" href="#">
        <img src="https://i.ibb.co/T86FM5z/48cdae97-eaa4-45a0-a90a-867fe5c8077d-200x200.png" className="d-inline-block align-top" alt="" loading="lazy" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Her World</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Family</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Friends</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/videos" > Discography </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
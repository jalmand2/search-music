import React from 'react';


const Nav = ({ showHome}) => {
    return ( 
       
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid" id="naviePoo">
      {/* <!-- <a class="navbar-brand" href="#">Navbar</a> --> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" id="navPoo">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#ex">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ex">Saved Songs</a>
          </li>
          {/* <!-- <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled hidden">Logout</a>
          </li> --> */}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#ex" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" id="dropBox">
              <li><a class="dropdown-item hidden" href="#ex">My Account</a></li>
              <li><a class="dropdown-item" href="#ex">FAQ</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="#ex">Sign in</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
  );
  };

export default Nav;
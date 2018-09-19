const React = require('react');
const Link = require('react-router-dom').Link


const styles = require('../style.css');


/* the main page for the index route of this app */
const NavBar = function() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid" style={{"height": "100%;"}}>
      <a class="navbar-brand" href="#">ALLAN DO</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#aboutSec">About</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#portfolioSec">Projects</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};


module.exports = NavBar;
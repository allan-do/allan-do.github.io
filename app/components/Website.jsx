const React = require('react');
const Link = require('react-router-dom').Link
const NavBar = require('./NavBar');
const AboutSec = require('./AboutSec');
const Footer = require('./Footer');
const styles = require('../style.css');
const ProjectSection = require('./ProjectSection');


/* the main page for the index route of this app */
const Website = function() {
  return (
    <div>
      <NavBar />
      <AboutSec />
      <ProjectSection />
      <Footer />
    </div>
  );
};


module.exports = Website;
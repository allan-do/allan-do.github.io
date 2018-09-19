const React = require('react');
const Link = require('react-router-dom').Link


const styles = require('../style.css');


/* the main page for the index route of this app */
const Footer = function() {
  return (
    <footer className="footerContainer"> 
    
    <div className='socialContainer footerInfo'>
      <a className='socialMedia' href="https://www.linkedin.com/in/allan-do-cpa-83480b64/" target="_blank">
        <i className="fa fa-linkedin"></i>
      </a>
      <a className='socialMedia' href="https://github.com/allan-do"  target="_blank">
        <i className="fa fa-github"></i>
      </a>
      <a className='socialMedia' href="https://www.freecodecamp.org/portfolio/allan-do" target="_blank">
        <i className="fa fa-free-code-camp"></i>
      </a>
    </div>
    <p id='footerCaption' className="footerInfo">Designed and Coded by Allan Do &#169;2018</p>

</footer>
  );
};


module.exports = Footer;
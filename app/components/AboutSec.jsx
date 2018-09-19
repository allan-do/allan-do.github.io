const React = require('react');
const Link = require('react-router-dom').Link


const styles = require('../style.css');


/* the main page for the index route of this app */
const AboutSec = function() {
  return (
    <div id="aboutSec" className="aboutSec">
      <div className="row">
        <div className="col-sm-8 text-center">
          <h4 id="bioShort">{"Developer - CPA"}</h4>
          <hr style={{"border-color":"black;"}} />
          <hr style={{"border-color": "black;"}} />
          <p id="bioDes">{"Hobbyist developer that understands accounting, taxes, and is personally invested in the advancement of technology."}</p>
        </div>
        <div class="col-sm-4" style={{"overflow": "hidden;"}}>
          <div className="fill">
            <img id="profPic" src="https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2FselfPicture.jpg?1537194866984" />
          </div>
        </div>
      </div>
    </div>
  );
};


module.exports = AboutSec;
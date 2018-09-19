const React = require('react');
const Link = require('react-router-dom').Link
const Project = require('./Project');

const styles = require('../style.css');

var projStyle = {
  width: "100%",
  height: "100%"
};

var projList = [{url: "https://codepen.io/allan-do/full/MXxomw/", name: "Drum Machine", img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2FDrum%20Machine.PNG?1537298274267"},
                {url: "https://codepen.io/allan-do/full/WJVMwg/", name: "Simon Game", img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2FSimon%20Game.PNG?1537299385731"},
                {url: "https://codepen.io/allan-do/full/LmXVMZ/", name: "Tic Tac Toe FCC", img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Ftictactoe.PNG?1537299383115"},
                {url: "https://codepen.io/allan-do/full/KRXKwP/", name: "Pomodoro Clock",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fpomodoro.PNG?1537299386599"},
                {url: "https://codepen.io/allan-do/full/LmxgNm/", name: "Calculator",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fcalculator.PNG?1537299384542"},
                {url: "https://abrupt-basilisk.glitch.me/", name: "Tribute Page for Nobuo Uematsu",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fnobuo.PNG?1537299386812"},
                {url: "https://codepen.io/allan-do/full/MVQYZN/", name: "Random Quote Machine",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fquotes.PNG?1537299384060"},
                {url: "https://codepen.io/allan-do/full/zWjLqN/", name: "Weather App",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fweather.PNG?1537299385093"},
                {url: "https://codepen.io/allan-do/full/JLGOjj/", name: "Wikipedia Viewer",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fwikipedia.PNG?1537299383809"},
                {url: "https://codepen.io/allan-do/full/OvqLeY/", name: "Twitch Viewer",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Ftwitch.PNG?1537299383547"},
                {url: "https://codepen.io/allan-do/full/KeqPXq/", name: "Technical Doc Page",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Ftechnicaldoc.PNG?1537299383372"},
                {url: "https://codepen.io/allan-do/full/MXBRgd/", name: "Markdown Previewer",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fmarkdown.PNG?1537299385296"}];

/* the main page for the index route of this app */
const ProjectSection = function() {
  return (
    <div id="portfolioSec">
  <h2>
    Projects
  </h2>
  <div className="text-center">
    <button className="btn">{"HTML/CSS/JavaScript"}</button>
    <button className="btn">{"ReactJS Library"}</button>
    <button className="btn">{"NodeJS Library"}</button>    
  </div>
  <div className="row center projectContainer container">
    {projList.map(function(obj, i) {
      return <Project obj={obj} />
    })}
  </div>
</div>
  );
};

module.exports = ProjectSection;
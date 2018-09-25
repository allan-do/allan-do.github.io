const React = require('react');
const Link = require('react-router-dom').Link
const Project = require('./Project');

const styles = require('../style.css');

var projStyle = {
  width: "100%",
  height: "100%"
};


/* the main page for the index route of this app */
class ProjectSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projList: this.props.projList
    }
  }
  render() {
    return (
      <div id="portfolioSec">
    <h2>
      Projects
    </h2>
    <div className="text-center">
      <button id="p1" className="btn" onClick={this.props.onFilter}>{"All"}</button>
      <button id="p2" className="btn" onClick={this.props.onFilter}>{"HTML/CSS/JavaScript"}</button>
      <button id="p3" className="btn" onClick={this.props.onFilter}>{"API Call"}</button>
      <button id="p4" className="btn" onClick={this.props.onFilter}>{"React.js"}</button>
      <button id="p5" className="btn" onClick={this.props.onFilter}>{"Node.js"}</button>    
    </div>
    <div className="row center projectContainer container">
      {this.props.projList.map(function(obj, i) {
        return <Project obj={obj} />
      })}
    </div>
  </div>
    );
  }
};

module.exports = ProjectSection;
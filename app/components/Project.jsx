const React = require('react');
const Link = require('react-router-dom').Link


const styles = require('../style.css');

var projStyle = {
  width: "100%",
  height: "100%"
};

/* the main page for the index route of this app */
class Project extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
  return (
    <div className="project"><a href={this.props.obj.url} target="_blank"><img src={this.props.obj.img} alt={this.props.obj.name} style={projStyle}/></a></div>
  );
};
}


module.exports = Project;
/* container which maps state and dispatches to its props 
  so it can be referenced in the VoteButtons component */

const { connect } = require('react-redux');
const actions = require('../actions');
const ProjectSection = require('../components/ProjectSection');

var projList = [{url: "https://codepen.io/allan-do/full/MXxomw/", name: "Drum Machine", img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2FDrum%20Machine.PNG?1537298274267", tag: "p2"},
                {url: "https://codepen.io/allan-do/full/WJVMwg/", name: "Simon Game", img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2FSimon%20Game.PNG?1537299385731", tag: "p2"},
                {url: "https://codepen.io/allan-do/full/LmXVMZ/", name: "Tic Tac Toe FCC", img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Ftictactoe.PNG?1537299383115", tag: "p2"},
                {url: "https://codepen.io/allan-do/full/KRXKwP/", name: "Pomodoro Clock",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fpomodoro.PNG?1537299386599", tag: "p2"},
                {url: "https://codepen.io/allan-do/full/LmxgNm/", name: "Calculator",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fcalculator.PNG?1537299384542", tag: "p2"},
                {url: "https://abrupt-basilisk.glitch.me/", name: "Tribute Page for Nobuo Uematsu",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fnobuo.PNG?1537299386812", tag: "p2"},
                {url: "https://codepen.io/allan-do/full/MVQYZN/", name: "Random Quote Machine",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fquotes.PNG?1537299384060", tag: "p2"},
                {url: "https://codepen.io/allan-do/full/zWjLqN/", name: "Weather App",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fweather.PNG?1537299385093", tag: "p3"},
                {url: "https://codepen.io/allan-do/full/JLGOjj/", name: "Wikipedia Viewer",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fwikipedia.PNG?1537299383809", tag: "p3"},
                {url: "https://codepen.io/allan-do/full/OvqLeY/", name: "Twitch Viewer",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Ftwitch.PNG?1537299383547", tag: "p3"},
                {url: "https://codepen.io/allan-do/full/KeqPXq/", name: "Technical Doc Page",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Ftechnicaldoc.PNG?1537299383372", tag: "p4"},
                {url: "https://codepen.io/allan-do/full/MXBRgd/", name: "Markdown Previewer",img: "https://cdn.glitch.com/6b2e97b5-6976-47a1-9bfa-631262ae758a%2Fmarkdown.PNG?1537299385296", tag: "p4"}];

const mapStateToProps = function(state) {
  if (state.projList == null) {
    state.projList = projList;
  }
  return {
    projList: state.projList
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onIncTime: function() {
      dispatch(actions.inctime())
    },
    onDecTime: function() {
      dispatch(actions.dectime())
    },
    onFilter: function() {
      dispatch(actions.filter())
    }
  }
}

const ProjectSecContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSection);

module.exports = ProjectSecContainer;
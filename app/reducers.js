/* reducers, this defines what functions are actually done in redux*/

const { LENGTHCONTROLLIST, ADDTIMER, REMOVETIMER, SUBMIT, TOGGLETIME, FILTER } = require('./actions');

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

function votes(state = [], action) {
  switch (action.type) {      
    case ADDTIMER:
      //do not make a copy of the state or else it won't real tiem update
      var nextTimer = {index: state.lengthControlList.length, name: "Placeholder", length: 1, type: "Session"}
      state.lengthControlList.push(nextTimer)
      return Object.assign({}, state, {
        voteScore: ( state.voteScore ) ? state.voteScore + 1 : 1,
        voteCount: ( state.voteCount ) ? state.voteCount + 1 : 1,
        lengthControlList: state.lengthControlList    
      });
    case REMOVETIMER:
      if (state.lengthControlList.length == 1) {
        return state;
      }
      state.lengthControlList.pop();
      return Object.assign({}, state, {
        voteScore: ( state.voteScore ) ? state.voteScore - 1 : -1,
        voteCount: ( state.voteCount ) ? state.voteCount + 1 : 1,
        lengthControlList: state.lengthControlList    
      });
    case SUBMIT:
      var submitList = []
      var sessionName = document.getElementsByClassName('timeLabel');
      var sessionTime = document.getElementsByClassName('timeSelection');
      for (var i=0; i<sessionName.length; i++){
        submitList.push({index: i, name: sessionName[i].value, length: parseInt(sessionTime[i].value), type: "Session " + (i+1)});
      }
      state.lengthControlList = submitList;
      return Object.assign({}, state, {
        voteScore: ( state.voteScore ) ? state.voteScore - 1 : -1,
        voteCount: ( state.voteCount ) ? state.voteCount + 1 : 1,
        lengthControlList: state.lengthControlList    
      });
    case TOGGLETIME:
      let action = event.target.id.slice(0,3);
      let currentId = event.target.id.slice(3);
      let currentEntry = document.getElementById("timeSelect"+currentId);
      let currentValue = parseInt(currentEntry.value);  
      if (action == 'inc'){
        if (currentValue < 60){
          state.lengthControlList[parseInt(currentId)].length += 1;
        }
      }
      else {
        if (currentValue > 1) {
          state.lengthControlList[parseInt(currentId)].length -= 1;
        }
      }
      return state;
    case FILTER:
      if (event.target.id == "p1"){
        return Object.assign({}, state, {
        projList: projList
      });
      } else {
        return Object.assign({}, state, {
        projList: projList.filter(project => project.tag == event.target.id)
        });
      }      
    default:
      return state;
  }
}

module.exports = votes
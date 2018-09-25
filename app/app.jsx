const React = require('react');
const { render } = require('react-dom');

// router
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

// redux
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const votes = require('./reducers');

let store = createStore(votes);

/* Import Components */
const Website = require('./components/Website');
const AboutSec = require('./components/AboutSec');

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Website}/>
        <Route path="/about" component={AboutSec}/>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('main'));
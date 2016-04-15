/*
 * Application Entry
 * version 0.1.0
 */
 (function(){
  var React = require('react');
  var ReactDOM = require('react-dom');
  //
  // ref : https://www.npmjs.com/package/react-tap-event-plugin
  //var injectTapEventPlugin = require("react-tap-event-plugin");
  //injectTapEventPlugin();
  //
  var Router = require('react-router').Router;
  var Route = require('react-router').Route;
  var IndexRoute = require('react-router').IndexRoute;
  var hashHistory = require('react-router').hashHistory;
  // var browserHistory = require('react-router').browserHistory;
  //
  var AppControllerView = require('./component/AppControllerView.react');
  var BootControllerView = require('./component/BootControllerView.react');
  var HomeControllerView = require('./component/HomeControllerView.react');
  var SeeAllControllerView = require('./component/SeeAllControllerView.react');
  var AddNewControllerView = require('./component/AddNewControllerView.react');
  //
  var routes = (
                <Route path="/" component={AppControllerView}>
                  <IndexRoute component={BootControllerView} />
                  <Route path="home" component={HomeControllerView} />
                  <Route path="see" component={SeeAllControllerView} />
                  <Route path="add" component={AddNewControllerView} />
                </Route>
              );
  //
  var App = ReactDOM.render(<Router routes={routes} history={hashHistory} />,document.getElementById('react-app'));
  //


})();

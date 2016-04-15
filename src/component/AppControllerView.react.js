/*
 * Application Controller View
 */
//
var React = require('react');

// react-router
var Router = require('react-router').Router;
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var browserHistory = require('react-router').browserHistory;

var BootControllerView = require('./BootControllerView.react');

var AppControllerView = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState: function(){
    return ({isDeviceReady:'NOPE'});
  },
  componentWillMount: function(){
    var that = this;
    document.addEventListener("deviceready", that.onDeviceReady, false);
  },
  componentWillUnmount: function(){
    var that = this;
    document.removeEventListener("deviceready", that.onDeviceReady, false);
  },

  render:function(){
    // Two ways to go about after checking the onDeviceReady event.
    // 1. First is just move to a different route on the event
    // 2. Second is adding a if-else and either return a default view or the application on the event

    if(this.state.isDeviceReady==='YEP'){
      return(
        <div>
          <nav className="u-full-width">
            <h2>Device Ready? { this.state.isDeviceReady }.</h2>
            <ul id="navlist">
              <li><Link to='/see' className="button button-red"> See All </Link></li>
              <li><Link to='/add' className="button button-red"> Add New </Link></li>
              <li><IndexLink to="/home">Home</IndexLink></li>
            </ul>
          </nav>
          {
            //renders the children
            this.props.children
          }
        </div>
      );
    }else{
      return(<BootControllerView />);
    }

  },

  onDeviceReady: function(){
    //alert('AppControllerView : Device Ready!');
    this.setState({isDeviceReady:'YEP'});// type 2: checks the if-else and then moves to the route too
    this.context.router.push('/home');// type 1: just a different route
  },

});
module.exports = AppControllerView;

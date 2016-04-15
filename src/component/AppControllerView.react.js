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
    alert('render:'+this.state.isDeviceReady);
    // Checks for onDeviceReady event and then only renders the actual application
    if(this.state.isDeviceReady==='YEP'){
      return(
        <div>
          <nav className="u-full-width">
            <h2>Device Ready? { this.state.isDeviceReady }.</h2>
            <ul id="navlist">
              <li><Link to='/see' className="button button-red"> See All </Link></li>
              <li><Link to='/add' className="button button-red"> Add New </Link></li>
              <li><IndexLink to="/">Home</IndexLink></li>
            </ul>
          </nav>
          {
            //renders the children
            this.props.children
          }
        </div>
      );
    }else{
      return(
        <div>Device is getting ready.</div>
      );
    }

  },

  onDeviceReady: function(){
    //alert('AppControllerView : Device Ready!');
    this.setState({isDeviceReady:'YEP'});
  },

});
module.exports = AppControllerView;

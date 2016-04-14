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
  render:function(){
    var displayAlert = function(){
      alert('Cordova !');
    };
    document.addEventListener("deviceready", displayAlert, false);
    return(
      <div>
        AppControllerView
      </div>
    );
  }
});
module.exports = AppControllerView;

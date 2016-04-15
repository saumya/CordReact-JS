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
    var that = this;
    var message = 'Nothing';
    var displayAlert = function(){
      alert('Cordova !');
      //that.context.router.push('/see');
    };
    var onPause = function(){
      //('AppControllerView:onPause !');
      alert('pause');
      console.log('AppControllerView:onPause');
    };
    document.addEventListener("deviceready", displayAlert, false);
    document.addEventListener("pause", onPause, false);
    return(
      <div>
        AppControllerView
        {
          //renders the children
          this.props.children
        }
      </div>
    );
  }
});
module.exports = AppControllerView;

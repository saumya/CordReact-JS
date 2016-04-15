var React = require('react');
var HomeControllerView = React.createClass({
  getInitialState: function(){
    return ({manufacturer:'NOT FOUND YET!'});
  },
  componentWillMount: function(){
    //
  },
  componentWillUnmount: function(){
    //
  },
  render:function(){
    return(
      <div>
        HomeControllerView
        <div>We can call all the Cordova APIs as the application starts only after the deviceReady event check.</div>
        <div>Device manufacturer is {device.manufacturer}</div>
        <div>Device model is {device.model}</div>
      </div>
    );
  },
});
module.exports = HomeControllerView;

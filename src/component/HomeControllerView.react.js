var React = require('react');
var HomeControllerView = React.createClass({
  getInitialState: function(){
    return ({manufacturer:'NOT FOUND YET!'});
  },
  componentWillMount: function(){
    var that = this;
    document.addEventListener("deviceready", that.displayAlert, false);
    //document.addEventListener("pause", that.onPause, false);
  },
  componentWillUnmount: function(){
    var that = this;
    document.removeEventListener("deviceready", that.displayAlert, false);
    //document.removeEventListener("pause", that.onPause, false);
  },
  render:function(){
    var that = this;
    var s = device.manufacturer;
    return(
      <div>
        HomeControllerView
        <div>Device manufacturer is {that.state.manufacturer}</div>
      </div>
    );
  },
  displayAlert:function(){
    var s = device.manufacturer;
    //alert('Cordova ! device.manufacturer='+s);
    //that.context.router.push('/see');
    this.setState({manufacturer:s});
  },
  onPause:function(){
    //('AppControllerView:onPause !');
    alert('pause');
    console.log('AppControllerView:onPause');
  },
});
module.exports = HomeControllerView;

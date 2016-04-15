var React = require('react');
var HomeControllerView = React.createClass({
  componentWillMount: function(){
    var that = this;
    document.addEventListener("deviceready", that.displayAlert, false);
    document.addEventListener("pause", that.onPause, false);
  },
  componentWillUnmount: function(){
    var that = this;
    document.removeEventListener("deviceready", that.displayAlert, false);
    document.removeEventListener("pause", that.onPause, false);
  },
  render:function(){
    return(
      <div>
        HomeControllerView
      </div>
    );
  },
  displayAlert:function(){
    var s = device.manufacturer;
    alert('Cordova ! device.manufacturer='+s);
    //that.context.router.push('/see');
  },
  onPause:function(){
    //('AppControllerView:onPause !');
    alert('pause');
    console.log('AppControllerView:onPause');
  },
});
module.exports = HomeControllerView;

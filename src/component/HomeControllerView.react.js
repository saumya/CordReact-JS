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
        <div>Device manufacturer is {this.state.manufacturer}</div>
      </div>
    );
  },
});
module.exports = HomeControllerView;

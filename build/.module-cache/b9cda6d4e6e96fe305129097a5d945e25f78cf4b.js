var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var INTERVAL = 1000;

var AnimateDemo = React.createClass({displayName: 'AnimateDemo',
  getInitialState: function() {
    return {start: 0};
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, INTERVAL);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  tick: function() {
    this.setState({start: this.state.start + 1});
  },

  render: function() {
    var children = [];
    var pos = 0;
    var colors = ['red', 'gray', 'blue'];
    for (var i = this.state.start; i < this.state.start + 3; i++) {
      var style = {
        left: pos * 128,
        background: colors[i % 3]
      };
      pos++;
      children.push(React.createElement("div", {key: i, className: "animateItem", style: style}, i));
    }
    return (
      React.createElement(CSSTransitionGroup, {
        className: "animateExample", 
        transitionName: "example"}, 
        children
      )
    );
  }
});

React.render(
  React.createElement(AnimateDemo, null),
  document.getElementById('container')
);
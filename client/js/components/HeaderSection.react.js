var React = require('react');
var HeaderSection;
var UserStore = require('../stores/UserStore');

function getStateFromStores() {
  return {
    user: UserStore.getCurrent(),
  };
}

HeaderSection = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  }, // getInitialState

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="header-section">
        Hello, {this.state.user.name}!
      </div>
    );
  }, // render

  _onChange: function() {
    this.setState(getStateFromStores());
  },

});

module.exports = HeaderSection;

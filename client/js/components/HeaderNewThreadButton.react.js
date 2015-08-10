var React = require('react');
var HeaderNewThreadButton;
var ChatThreadActionCreators = require('../actions/ChatThreadActionCreators');

HeaderNewThreadButton = React.createClass({

  render: function() {
    return (
      <button
        className="HeaderSection__new-thread-button"
        onClick={this._onClick}>New Thread</button>
    );
  }, // render

  _onClick: function() {
    var threadName = prompt('Give me a thread name:');
    var messageObj = {
      threadID: null,
      threadName: threadName,
      authorName: 'Chris',
      text: '',
    };
    // TODO: send action to ChatMessageUtils > MessageStore to create new thread by not passing in (text, currentThreadID)
    ChatThreadActionCreators.clickNewThread(messageObj);
  }, // _onClick

});

module.exports = HeaderNewThreadButton;

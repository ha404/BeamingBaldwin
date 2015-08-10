// var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UserStore;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

UserStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getCurrent: function() {
    this.emitChange();
    // get info from database, now serve it here
    return {
      name: 'Steve', // needs to be dynamic from firebase
    };
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

});

// listen to the dispatcher for any 'actions' that get called
// we only care about what's in our switch statement
// UserStore.dispatchToken = ChatAppDispatcher.register(function(action) {
//   var message;
//
//   switch (action.type) {
//
//   default:
//     // do nothing
//   }
// });

module.exports = UserStore;

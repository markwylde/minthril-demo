const EventEmitter = require('events');
const routemeup = require('routemeup');

const routes = {
  '/': () => 'home',
  '/component': () => 'component',
  '/order': () => 'order',
  '/another': () => 'another',
  '/tree': () => 'tree'
};

module.exports = function (config) {
  const eventEmitter = new EventEmitter();

  const state = {
    message: 'this is your message',
    exampleNumber: config.initialNumber,
    incrementAmount: 2,
    multiply: 1,
    orderedData: [],
    tree: [{
      id: '1',
      title: 'One',
      children: [{
        id: '1.2',
        title: 'One.Two'
      }, {
        id: '1.3',
        title: 'One.Three'
      }]
    }, {
      id: '2',
      title: 'Two',
      children: [{
        id: '2.2',
        title: 'Two.Two'
      }, {
        id: '2.3',
        title: 'Two.Three'
      }]
    }]
  };

  function changeUrl () {
    const route = routemeup(routes, { url: window.location.pathname });

    state.page = route ? route.controller() : 'notFound';
    state.tokens = route ? route.tokens : {};

    eventEmitter.emit('stateChanged', { force: true });
  }

  function increment () {
    state.exampleNumber = (state.exampleNumber + state.incrementAmount) * state.multiply;
    eventEmitter.emit('stateChanged');
  }

  function setFormResult (formResult) {
    state.formResult = formResult;
    console.log(formResult);
    eventEmitter.emit('stateChanged');
  }

  function setIncrementAmount (newValue) {
    state.incrementAmount = parseFloat(newValue);
    eventEmitter.emit('stateChanged');
  }

  function setMultiply (newValue) {
    state.multiply = parseInt(newValue);
    eventEmitter.emit('stateChanged');
  }

  function emitStateChanged () {
    eventEmitter.emit('stateChanged');
  }

  return {
    state,
    emitStateChanged,

    setFormResult,

    changeUrl,
    increment,
    setIncrementAmount,
    setMultiply,

    on: eventEmitter.addListener.bind(eventEmitter),
    off: eventEmitter.removeListener.bind(eventEmitter)
  };
};

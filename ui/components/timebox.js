const minthril = require('minthril');

module.exports = function (options) {
  let timer;
  function handleCreate (event) {
    const tick = () => {
      event.dom.textContent = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString();
    };

    timer = setInterval(tick, 300);
    tick();
  }

  function handleRemove () {
    clearInterval(timer);
  }

  return {
    oncreate: handleCreate,
    onremove: handleRemove,
    view: () => {
      return minthril('timebox', {}, 'Loading');
    }
  };
};

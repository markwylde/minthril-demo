const minthril = require('minthril');
const pushStateAnchors = require('spath/pushStateAnchors');
require('./modules/onUrlChange');

const pages = {
  home: require('./pages/home'),
  another: require('./pages/another'),
  order: require('./pages/order'),
  tree: require('./pages/tree'),
  notFound: require('./pages/notFound')
};

module.exports = function (app, container) {
  document.addEventListener('click', pushStateAnchors());
  window.addEventListener('locationchange', app.changeUrl);
  app.changeUrl();

  function render (options) {
    if (!app.state.page) {
      return;
    }

    const page = pages[app.state.page] || pages.notFound;

    minthril.render(container, minthril(page, { app }));
  }

  app.on('stateChanged', render);
  render();
};

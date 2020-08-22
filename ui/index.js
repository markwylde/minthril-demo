const minthril = require('minthril');
const pushStateAnchors = require('spath/pushStateAnchors');
require('./modules/onUrlChange');

const pages = {
  home: require('./pages/home'),
  component: require('./pages/component'),
  another: require('./pages/another'),
  tree: require('./pages/tree'),
  notFound: require('./pages/notFound')
};

module.exports = function (app, container) {
  document.addEventListener('click', pushStateAnchors());
  window.addEventListener('locationchange', app.changeUrl);
  app.changeUrl();

  function render (options) {
    if (options && options.force) {
      minthril.render(container, '');
    }

    if (!app.state.page) {
      return;
    }

    const page = pages[app.state.page] || pages.notFound;

    const content = page(app);
    minthril.render(container, content);
  }

  app.on('stateChanged', render);
  render();
};

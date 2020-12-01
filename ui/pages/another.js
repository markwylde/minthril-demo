const m = require('minthril');

const menu = require('../components/menu');

module.exports = function (app) {
  return {
    view: () => m('main',
      m(menu, { app }),
      m('section',
        m('h1', 'Another Page'),
        m('p', 'This is another test page.')
      )
    )
  };
};

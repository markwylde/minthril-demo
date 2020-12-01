const m = require('minthril');

const menu = require('../components/menu');

module.exports = function () {
  return {
    view: () => {
      return m('main',
        m(menu),
        m('section',
          m('h1', 'Not Found'),
          m('p', 'The requested page could not be found.')
        )
      );
    }
  };
};

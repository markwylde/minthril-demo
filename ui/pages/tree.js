const m = require('minthril');

const menu = require('../components/menu');

function insertChildren (app, itemData) {
  return (event) => {
    event.stopPropagation();
    itemData.children = itemData.children || [];
    itemData.children.push({
      id: itemData.id + '.1',
      title: itemData.title + ' One'
    }, {
      id: itemData.id + '.2',
      title: itemData.title + ' Two'
    }, {
      id: itemData.id + '.3',
      title: itemData.title + ' Three'
    });
    app.emitStateChanged();
  };
}

function treeChild ({ attrs }) {
  const { app, tree } = attrs;

  return {
    view: () => m('ul',
      tree.map(itemData => {
        const children = itemData.children && itemData.children.length > 0 && m(treeChild, { app, tree: itemData.children });
        return m('li', { onclick: insertChildren(app, itemData) },
          m('span',
            m('strong', itemData.title),
            m('span', itemData.id)
          ),
          children
        );
      })
    )
  };
}

module.exports = function () {
  return {
    view: ({ attrs }) => {
      const app = attrs.app;

      return m('main',
        m(menu),
        m('section',
          m('h1', 'Tree Page'),
          m('p', 'This is tree page.'),
          m(treeChild, { app, tree: app.state.tree })
        )
      );
    }
  };
};

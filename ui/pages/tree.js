const hyperx = require('hyperx');

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

function renderChild (html, app, tree) {
  return html`
    <ul>
      ${tree.map(itemData => {
        return html`
          <li onclick=${insertChildren(app, itemData)}>
            <strong>${itemData.title}</strong> (${itemData.id})
            ${itemData.children && itemData.children.length > 0 && renderChild(html, app, itemData.children)}
          </li>
        `;
      })}
    </ul>
  `;
}

module.exports = function (app, h) {
  const html = hyperx(h);

  return html`
    <main>
      ${menu(app, h)}
      
      <section>
        <h1>Tree Page</h1>
        <p>This is tree page.</p>
        ${renderChild(html, app, app.state.tree)}
      </section>
    </main>
  `;
};

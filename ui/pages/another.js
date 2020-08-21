
const hyperx = require('hyperx');

const menu = require('../components/menu');

module.exports = function (app, h) {
  const html = hyperx(h);

  return html`
    <main>
      ${menu(app, h)}
      
      <section>
        <h1>Another Page</h1>
        <p>This is another test page.</p>
      </section>
    </main>
  `;
};

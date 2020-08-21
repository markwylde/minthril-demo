const hyperx = require('hyperx');

const menu = require('../components/menu');

module.exports = function (app, h) {
  const html = hyperx(h);

  return html`
    <main>
      ${menu(app, h)}
      
      <section>
        <h1>Not Found</h1>
        <p>The requested page could not be found.</p>
      </section>
    </main>
  `;
};

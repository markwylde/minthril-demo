const minthril = require('minthril');
const html = require('hyperx')(minthril);

const menu = require('../components/menu');

module.exports = function (app) {
  return html`
    <main>
      ${menu(app)}
      
      <section>
        <h1>Not Found</h1>
        <p>The requested page could not be found.</p>
      </section>
    </main>
  `;
};

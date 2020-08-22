const minthril = require('minthril');
const html = require('hyperx')(minthril);

const menu = require('../components/menu');

module.exports = function (app) {
  return html`
    <main>
      ${menu(app)}
      
      <section>
        <h1>Another Page</h1>
        <p>This is another test page.</p>
      </section>
    </main>
  `;
};

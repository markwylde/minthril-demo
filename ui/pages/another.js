const menu = require('../components/menu');

module.exports = function (app, html) {
  return html`
    <main>
      ${menu(app, html)}
      
      <section>
        <h1>Another Page</h1>
        <p>This is another test page.</p>
      </section>
    </main>
  `;
};

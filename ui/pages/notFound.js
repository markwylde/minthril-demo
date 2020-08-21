const menu = require('../components/menu');

module.exports = function (app, html) {
  return html`
    <main>
      ${menu(app, html)}
      
      <section>
        <h1>Not Found</h1>
        <p>The requested page could not be found.</p>
      </section>
    </main>
  `;
};

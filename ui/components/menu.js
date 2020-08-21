const hyperx = require('hyperx');

module.exports = function (app, h) {
  const html = hyperx(h);

  return html`
    <nav>
      <a href="/">Home</a>
      <a href="/component">Example Component</a>
      <a href="/another">Another Page</a>
      <a href="/tree">Tree Page</a>
      <a href="/wrong-route">Wrong Page</a>
    </nav>
  `;
};

const minthril = require('minthril');
const html = require('hyperx')(minthril);

module.exports = function (app) {
  return html`
    <nav>
      <a href="/">Home</a>
      <a href="/component">Example Component</a>
      <a href="/order">Order</a>
      <a href="/another">Another Page</a>
      <a href="/tree">Tree Page</a>
      <a href="/wrong-route">Wrong Page</a>
    </nav>
  `;
};

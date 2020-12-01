const minthril = require('minthril');
const html = require('hyperx')(minthril);

module.exports = function () {
  return {
    view: () => html`
      <nav>
        <a href="/">Home</a>
        <a href="/order">Order</a>
        <a href="/another">Another Page</a>
        <a href="/tree">Tree Page</a>
        <a href="/wrong-route">Wrong Page</a>
      </nav>
    `
  };
};

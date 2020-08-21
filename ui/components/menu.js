module.exports = function (app, html) {
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

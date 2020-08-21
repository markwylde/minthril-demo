window.history.pushState = (f => function pushState () {
  var ret = f.apply(this, arguments);
  window.dispatchEvent(new window.Event('pushstate'));
  window.dispatchEvent(new window.Event('locationchange'));
  return ret;
})(window.history.pushState);

window.history.replaceState = (f => function replaceState () {
  var ret = f.apply(this, arguments);
  window.dispatchEvent(new window.Event('replacestate'));
  window.dispatchEvent(new window.Event('locationchange'));
  return ret;
})(window.history.replaceState);

window.addEventListener('popstate', () => {
  window.dispatchEvent(new window.Event('locationchange'));
});

const minthril = require('minthril');
const html = require('hyperx')(minthril);

module.exports = function infobox ({ attrs }) {
  const state = {};
  function handleClick () {
    state.expanded = !state.expanded;

    attrs.app.emitStateChanged();
  }

  return {
    view: ({ attrs }) => html`
      <div class="infobox ${state.expanded ? 'expanded' : ''}">
        <button onclick=${handleClick}>${state.expanded ? 'Less Information' : 'More Information'}</button>
        <div>
          ${attrs.message}
        </div>
      </div>
    `
  };
};

const minthril = require('minthril');
const html = require('hyperx')(minthril);

module.exports = function infobox (options) {
  return minthril.createComponent(function (state, draw) {
    function handleClick () {
      state.expanded = !state.expanded;
      draw();
    }

    return html`
      <div class="infobox ${state.expanded ? 'expanded' : ''}">
        <button onclick=${handleClick}>${state.expanded ? 'Less Information' : 'More Information'}</button>
        <div>
          ${state.message}
        </div>
      </div>
    `;
  }, { message: options.message });
};

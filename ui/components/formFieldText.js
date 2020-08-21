const minthril = require('minthril');
const hyperx = require('hyperx');

function createFieldText (h, options) {
  const html = hyperx(h);

  return minthril.createComponent(function (state, draw, component) {
    function handleInput (event) {
      state.value = event.target.value;
      options.onInput && options.onInput(event, state);
    }

    function handleCreate (event) {
      event.dom.value = options.initialValue;
    }

    component.getValue = () => state.value;

    return html`
      <input oncreate=${handleCreate} ${options.autoFocus ? 'autofocus' : ''} name="${options.name}" oninput=${handleInput} />
    `;
  }, options);
}

module.exports = createFieldText;

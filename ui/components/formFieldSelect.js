const minthril = require('minthril');
const html = require('hyperx')(minthril);

function createFieldSelect (options) {
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
      <select oncreate=${handleCreate} ${options.autoFocus ? 'autofocus' : ''} name="${options.name}" oninput=${handleInput}>
        ${options.options.map(option => html`
          <option value=${option.value}>${option.label}</option>
        `)}
      </select>
    `;
  }, options);
}

module.exports = createFieldSelect;

const minthril = require('minthril');
const html = require('hyperx')(minthril);

module.exports = function infobox (options) {
  return minthril.createComponent(function (state, draw, component) {
    function handleClick () {
      state.expanded = !state.expanded;
      draw();
    }

    function handleInput (event) {
      state[event.target.name] = event.target.value;

      options.onInput && options.onInput(state);
    }

    component.getValue = () => state.value;

    return html`
      <div>
        <button onclick=${handleClick}>Toggle</button>
        <div ${state.expanded ? '' : 'hidden'}>
          ${state.message}
          <input name="value" oninput=${handleInput} />
        </div>
      </div>
    `;
  }, { message: options.message });
};

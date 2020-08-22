const minthril = require('minthril');
const html = require('hyperx')(minthril);

function createForm (options) {
  return minthril.createComponent(function (state, draw, component) {
    function handleCreate () {
      options.fields.forEach(field => {
        state[field.name] = field.initialValue;
      });
    }

    function handleInput (event, data) {
      state[data.name] = data.value;
      options.onInput && options.onInput(state);
    }

    component.getValue = () => state.value;

    return html`
      <form oncreate=${handleCreate} onsubmit=${event => options.onSubmit && options.onSubmit(event, state)}>
        ${options.fields.map(field => {
          return html`
            <div class="form-group">
              <label>${field.label}</label>
              ${field.component({ ...field, onInput: handleInput })}
            </div>
          `;
        })}

        <button>Submit</button>
      </form>
    `;
  }, {});
}

module.exports = createForm;

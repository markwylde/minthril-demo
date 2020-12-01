const minthril = require('minthril');
const html = require('hyperx')(minthril);

module.exports = function () {
  return {
    view: ({ attrs }) => {
      return html`
      <dropper 
        name=${attrs.name}
      >
        ${attrs.items.map(item => html`
          <p>
            <input
              type="radio" 
              onclick=${attrs.onchange.bind(null, item.id)} 
              id=${attrs.name + '_' + item.id}
              name=${attrs.name}
              value=${item.id} ${item.id === attrs.value ? 'checked' : ''} /> 
            
            <label for=${attrs.name + '_' + item.id}>${item.title}</label>
          </p>
        `)}
      </dropper>
    `;
    }
  };
};

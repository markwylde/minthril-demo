const minthril = require('minthril');
const html = require('hyperx')(minthril);

module.exports = function (options) {
  const component = html`
    <dropper 
      name=${options.name}
    >
      ${options.items.map(item => html`
        <p>
          <input
            type="radio" 
            onclick=${options.onchange.bind(null, item.id)} 
            id=${options.name + '_' + item.id}
            name=${options.name}
            value=${item.id} ${item.id === options.value ? 'checked' : ''} /> 
          
          <label for=${options.name + '_' + item.id}>${item.title}</label>
        </p>
      `)}
    </dropper>
  `;

  window.component = component;

  return component;
};

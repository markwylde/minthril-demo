const minthril = require('minthril');
const html = require('hyperx')(minthril);

module.exports = function (options) {
  let timer;
  function create (event) {
    const tick = () => {
      event.dom.textContent = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString();
    };

    timer = setInterval(tick, 300);
    tick();
  }

  function remove () {
    clearInterval(timer);
  }
  const component = html`
    <timebox oncreate=${create} onremove=${remove}></timebox>
  `;

  window.component = component;

  return component;
};

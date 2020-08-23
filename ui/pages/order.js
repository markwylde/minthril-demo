const minthril = require('minthril');
const html = require('hyperx')(minthril);

const menu = require('../components/menu');

function randomBetween (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderChild (app, tree) {
  const handleCreate = id => () => {
    console.log(id, 'has just been created');
  };

  return html`
    <ul>
      ${tree.map(orderedData => {
        return html`
          <li oncreate=${handleCreate(orderedData.id)} key=${orderedData.id}>
            I am <strong>${orderedData.id}</strong>
          </li>
        `;
      })}
    </ul>
  `;
}

module.exports = function (app) {
  function clearTimers () {
    app.state.orderedTimers.forEach(timer => {
      clearTimeout(timer);
      clearInterval(timer);
    });
  }

  function handleCreate () {
    app.state.orderedTimers = [
      setInterval(() => {
        app.state.orderedData.push({
          id: app.state.orderedData.length + 1
        });

        const index1 = randomBetween(0, app.state.orderedData.length - 1);
        const index2 = randomBetween(0, app.state.orderedData.length - 1);

        if (index1 !== index2) {
          const temp = app.state.orderedData[index1];
          app.state.orderedData[index1] = app.state.orderedData[index2];
          app.state.orderedData[index2] = temp;
        }

        app.emitStateChanged();
      }, 500),

      setTimeout(() => {
        clearTimers();
      }, 4500)
    ];
  }

  function handleRemove () {
    clearTimers();
  }

  return html`
    <main oncreate=${handleCreate} onremove=${handleRemove}>
      ${menu(app)}
      
      <section>
        <h1>Order</h1>
        <p>This is tree page.</p>
        ${renderChild(app, app.state.orderedData)}
      </section>
    </main>
  `;
};

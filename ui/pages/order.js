const m = require('minthril');

const menu = require('../components/menu');

function randomBetween (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function child () {
  const handleCreate = id => () => {
    console.log(id, 'has just been created');
  };

  return {
    view: ({ attrs }) => {
      const orderedData = attrs.app.state.orderedData;
      return m('ul',
        orderedData.map(orderedData => {
          return m('li',
            { oncreate: handleCreate(orderedData.id), key: orderedData.id },
            m('span', `I am ${orderedData.id}`)
          );
        })
      );
    }
  };
}

module.exports = function ({ attrs }) {
  const app = attrs.app;

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

  return {
    oncreate: handleCreate,
    onremove: handleRemove,
    view: ({ attrs }) => {
      const app = attrs.app;

      return m('main',
        m(menu),
        m('section',
          m('h1', 'Order'),
          m('p', 'This is ordered data page.'),
          m(child, { app })
        )
      );
    }
  };
};

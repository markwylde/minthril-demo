const menu = require('../components/menu');
const dropdown = require('../components/dropdown');
const timebox = require('../components/timebox');
const infoBox = require('../components/infoBox');

module.exports = function (app, html) {
  return html`
    <main >
      ${menu(app, html)}

      <section>
        <h1>Welcome</h1>

        ${infoBox({
          message: 'This is an infoBox an gives an example of creating an isolated state component'
        })}

        <p>The current time is ${timebox()}</p>
        <p>How much should we increment by?</p>

        ${dropdown({
          name: 'incrementAmount',
          items: Array(5).fill('').map((_, index) => ({
            id: index + 1,
            title: 'Number ' + (index + 1)
          })),
          value: app.state.incrementAmount || 1,
          onchange: app.setIncrementAmount
        })}

        <p>Multiple by two?</p>
        ${dropdown({
          name: 'multiply',
          items: [
            { id: 1, title: 'No' },
            { id: 2, title: 'Yes' }
          ],
          value: app.state.multiply || 1,
          onchange: app.setMultiply
        })}
        <p>This is a test.</p>
        <p>Number: ${app.state.exampleNumber}</p>
        <button onclick=${app.increment}>Increment</button>
      </section>
    </main>
  `;
};

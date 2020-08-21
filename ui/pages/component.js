const menu = require('../components/menu');
const form = require('../components/form');
const formFieldText = require('../components/formFieldText');
const formFieldSelect = require('../components/formFieldSelect');

module.exports = function (app, html) {
  const myForm = form({
    fields: [{
      name: 'firstName',
      label: 'First Name',
      component: formFieldText,
      autoFocus: true,
      initialValue: 'Joe'
    }, {
      name: 'lastName',
      label: 'Last Name',
      component: formFieldText,
      initialValue: 'Bloggs'
    }, {
      name: 'location',
      label: 'Location',
      component: formFieldSelect,
      options: [{
        value: 'au',
        label: 'Australia'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }],
      initialValue: 'uk'
    }],
    onSubmit: (event, state) => {
      event.preventDefault();
      app.setFormResult(state);
      console.log('submitted', state);
    },
    onInput: state => console.log('changed', state)
  });

  return html`
    <main >
      ${menu(app, html)}

      <section>
        <h1>Example Component</h1>

        <p>The form below is a component:</p>
        <div class="exampleFormContainer">
          ${myForm}
        </div>

        ${app.state.formResult ? html`
          <div>
            <h2>Result</h2>
            <pre><code>${JSON.stringify(app.state.formResult, null, 2)}</code></pre>
          </div>
        ` : null}

      </section>
    </main>
  `;
};

const test = require('basictap');
const automage = require('automage');

const virtuallyBrowse = require('./helpers/virtuallyBrowse');

test('test', async t => {
  t.plan(1);

  const window = await virtuallyBrowse('/');

  t.ok(await automage.get(window.document.body, 'Welcome', 'heading'), 'has correct page header');

  window.close();
});

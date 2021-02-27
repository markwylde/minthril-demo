const { JSDOM } = require('jsdom');

const createServer = require('./createServer');

async function virtuallyBrowse (pathname) {
  const server = await createServer();

  const dom = await JSDOM.fromURL('http://localhost:' + server.address().port + pathname, {
    pretendToBeVisual: true,
    runScripts: 'dangerously',
    resources: 'usable'
  });

  return {
    ...dom.window,

    close: () => {
      dom.window.close();
      server.close();
    }
  };
}

module.exports = virtuallyBrowse;

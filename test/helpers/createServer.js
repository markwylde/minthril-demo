const http = require('http');
const servatron = require('servatron');

const staticHandler = servatron({
  directory: './public',
  spa: true
});

function createServer () {
  return new Promise(resolve => {
    const server = http.createServer(staticHandler);
    server.listen();
    server.on('listening', () => {
      resolve(server);
    });
  });
}

module.exports = createServer;

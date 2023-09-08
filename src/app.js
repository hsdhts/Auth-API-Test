require('dotenv').config();
const createServer = require('./Infrasructures/http/CreateServer');
const container = require('./Infrasructures/container');
 
const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`server start at ${server.info.uri}`);
};
 
start();
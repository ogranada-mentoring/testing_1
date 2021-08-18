const express = require('express');


function makeRouter(server) {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send('OK');
  })

  server.use(router);
  return router;
}

function cargarInfoDeBD() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OK');
    }, 1000);
  })
}

module.exports = {
  makeRouter,
  cargarInfoDeBD
}

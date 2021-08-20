const express = require('express');
const fetch = require("node-fetch")
const { cache } = require("./cache")

function makeRouter() {
  const router = express.Router();

  router.get('/:ciudad', cache, async (req, res) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.ciudad}&appid=217381ead8580dfce5b954b94162893f`)
    const cityData = await response.json()
    req.cache(cityData)
    res.json(cityData)
  })

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

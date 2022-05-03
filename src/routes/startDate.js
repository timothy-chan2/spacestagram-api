require('dotenv').config();
const router = require("express").Router();

const axios = require("axios");

module.exports = () => {
  router.get("/start-dates/:startDate", (request, response) => {
    axios.get(`https://api.nasa.gov/planetary/apod?start_date=${request.params.startDate}&api_key=${process.env.API_KEY}`)
      .then(res => response.json(res.data.reverse()));
  });

  return router;
};
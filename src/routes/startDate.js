require('dotenv').config();
const router = require("express").Router();

const axios = require("axios");

module.exports = () => {
  router.get("/:startDate", (request, response) => {
    axios.get(`https://api.nasa.gov/planetary/apod?start_date=${request.params.startDate}&api_key=${process.env.GOV_DATA_API_KEY}`)
      .then(res => response.json(res.data.reverse()));
  });

  return router;
};
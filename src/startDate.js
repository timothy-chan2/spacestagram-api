require('dotenv').config();
const router = require("express").Router();

module.exports = () => {
  router.get("/:startDate", (request, response) => {
    axios.get(`https://api.nasa.gov/planetary/apod?start_date=${request.params.startDate}&api_key=${process.env.GOV_DATA_API_KEY}`)
      .then(response => console.log(response.data.reverse()))
      .catch(error => console.log(error));
  });

  return router;
};
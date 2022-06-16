const config = require("../config");
const axios = require("axios");

module.exports = {
  home: async (req, res) => {
    const headingKey = "home";
    let response;
    try {
      response = await axios.get(`${config.DB_BASE_URL}/venues`);
    } catch(e) {
      response = {data: []};
    }
    res.render("home", { headingKey, venues: response.data });
  }
}
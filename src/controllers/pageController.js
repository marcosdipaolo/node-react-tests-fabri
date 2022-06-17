const config = require("../../config");
const axios = require("axios");

export const home = async (req, res) => {
  const headingKey = "home";
  let response;
  try {
    response = await axios.get(`${config.DB_BASE_URL}/venues`);
  } catch(e) {
    response = {data: []};
  }
  res.render("home", { headingKey, venues: response.data });
}

export const about = (req, res) => {
  res.render("about", { headingKey: "about" });
}

export const tickets = (req, res) => {
  res.render("tickets", { headingKey: "tickets" });
}

export const rentVenue = (req, res) => {
  res.render("rent-venue", { headingKey: "rent-venue" });
}

export const showEvents = (req, res) => {
  res.render("shows-events", { headingKey: "shows-events" });
}

export const ticketDetails = (req, res) => {
  res.render("tickets/details", { headingKey: "tickets" });
}

export const eventDetails = (req, res) => {
  res.render("shows-events/details", { headingKey: "shows-events" });
}
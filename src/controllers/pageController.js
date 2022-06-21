import config from "../../config";
import axios from "axios";
import headingResolver from "../utils/headingResolver";

export const home = async (req, res) => {
  const headingKey = "home";
  let response;
  try {
    response = await axios.get(`${config.DB_BASE_URL}/venues`);
  } catch(e) {
    response = {data: []};
  }
  res.render("home", { ...headingResolver(headingKey), venues: response.data });
}

export const about = async (req, res) => {
  res.render("about", headingResolver("about"));
}

export const tickets = (req, res) => {
  res.render("tickets", headingResolver("tickets"));
}

export const rentVenue = (req, res) => {
  res.render("rent-venue", headingResolver("rent-venue"));
}

export const showEvents = (req, res) => {
  console.error("__ERROR__", headingResolver("shows-events"))
  res.render("shows-events", headingResolver("shows-events"));
}

export const ticketDetails = (req, res) => {
  res.render("tickets/details", headingResolver("tickets"));
}

export const eventDetails = (req, res) => {
  res.render("shows-events/details", headingResolver("shows-events"));
}
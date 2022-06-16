const router = require('express').Router();
const { home } = require("./controllers/pageController");

router.get("/", home);
router.get("/about", (req, res) => {
    res.render("about", { headingKey: "about" });
});
router.get("/rent-venue", (req, res) => {
    res.render("rent-venue", { headingKey: "rent-venue" });
});
router.get("/shows-events", (req, res) => {
    res.render("shows-events", { headingKey: "shows-events" });
});
router.get("/tickets", (req, res) => {
    res.render("tickets", { headingKey: "tickets" });
});
router.get("/ticket-details", (req, res) => {
    res.render("tickets/details", { headingKey: "tickets" });
});
router.get("/event-details", (req, res) => {
    res.render("shows-events/details", { headingKey: "shows-events" });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.index);
router.get('/about', controller.about);
router.get('/rent-venue', controller.rent_venue);
router.get('/shows-events', controller.show_events);
router.get('/event-details', controller.event_details);
router.get('/tickets', controller.tickets);
router.get('/ticket-details', controller.ticket_details);

module.exports = router;
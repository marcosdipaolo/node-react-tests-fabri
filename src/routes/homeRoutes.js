import { Router } from 'express';

import {
    index,
    about,
    rent_venue,
    show_events,
    event_details,
    tickets,
    ticket_details,
} from '../controllers/controller.js';

const router = Router();

const map = {
    ["/"]: index,
    ["/about"]: about,
    ["/rent-venue"]: rent_venue,
    ["/shows-events"]: show_events,
    ["/tickets"]: tickets,
    ["/ticket-details"]: ticket_details,
    ["/event-details"]: event_details,
}

for (let url in map) {
    router.get(url, map[url]);
}

export default router;
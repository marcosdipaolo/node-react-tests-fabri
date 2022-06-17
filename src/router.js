import { Router } from 'express';
import { home, about, rentVenue, tickets, ticketDetails, eventDetails, showEvents } from "./controllers/pageController";

const router = Router();

const map = {
    ["/"]: home,
    ["/about"]: about,
    ["/rent-venue"]: rentVenue,
    ["/shows-events"]: showEvents,
    ["/tickets"]: tickets,
    ["/ticket-details"]: ticketDetails,
    ["/event-details"]: eventDetails,
}

for (let url in map) {
    router.get(url, map[url]);
}

export default router;
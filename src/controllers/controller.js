import fetch from 'node-fetch';
import '../../loadEnv.js';

const url = process.env.DB_URL;

export const index = (req, res) => {
    res.render('./home/index', { title: 'Home' });
};
export const about = async (req, res) => {
    try {
        let ev_url = url.concat('/events.json');
        console.log(ev_url);
        const response = await fetch(ev_url);
        response.json().then((imp) => {
            let evs = [];
            for (const key in imp) {
                evs.push(imp[key]);
            }
            console.log(evs);
            res.render('./about/index', {
                title: 'About',
                events: evs,
            });
        });
    } catch (e) {
        res.status(404).render('./errors/index', {
            title: 'Error',
            desc: e.message + '!',
        });
    }
};
export const rent_venue = (req, res) => {
    res.render('./rent_venues/index', {
        title: 'Rent Venue',
    });
};
export const show_events = async (req, res) => {
    try {
        const response = await fetch(url + '/shows.json');
        response.json().then((imp) => {
            let evs = [];
            for (const key in imp) {
                evs.push(imp[key]);
            }
            res.render('./show_events/index', {
                title: 'Events',
                shows: evs,
            });
        });
    } catch (e) {
        res.status(404).render('./errors/index', {
            title: 'Error',
            desc: e.message + '!',
        });
    }
};
export const event_details = async (req, res) => {
    try {
        const response = await fetch(url + '/details.json');
        response.json().then((imp) => {
            let evs = [];
            for (const key in imp) {
                evs.push(imp[key]);
            }
            res.render('./event_details/index', {
                title: 'Details',
                details: evs,
            });
        });
    } catch (e) {
        res.status(404).render('./errors/index', {
            title: 'Error',
            desc: e.message + '!',
        });
    }
};
export const tickets = (req, res) => {
    res.render('./tickets/index', { title: 'Tickets' });
};
export const ticket_details = (req, res) => {
    res.render('./tickets/details', { title: 'Details' });
};

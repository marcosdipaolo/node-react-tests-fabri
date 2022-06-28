const fetch = require('node-fetch');
const controller = {};

const url = 'https://react-http-467cc-default-rtdb.firebaseio.com';
controller.index = (req, res) => {
    res.render('./home/index', { root: __dirname, title: 'Home' });
};
controller.about = async (req, res) => {
    try {
        const response = await fetch(url+'/events.json');
        await response.json()
            .then((imp)=>{
                let evs = [];
                for(const key in imp){
                    evs.push(imp[key])
                }
                res.render('./about/index', {
                    root: __dirname,
                    title: 'About',
                    events: evs,
                })}
            );
    } catch (e) {
        res.status(404).render('./errors/index', {
            title: 'Error',
            desc: e.message + '!',
        });
    }
};
controller.rent_venue = (req, res) => {
    res.render('./rent_venues/index', { root: __dirname, title: 'Rent Venue' });
};
//events
controller.show_events = async (req, res) => {
    try {
        const response = await fetch(url+'/shows.json');
        await response.json()
            .then((imp)=>{
                let evs = [];
                for(const key in imp){
                    evs.push(imp[key])
                }
                res.render('./show_events/index', {
                    root: __dirname,
                    title: 'Events',
                    shows: evs,
                })}
            );
    } catch (e) {
        res.status(404).render('./errors/index', {
            title: 'Error',
            desc: e.message + '!',
        });
    }
};
controller.event_details = (req, res) => {
    res.render('./event_details/index', { root: __dirname, title: 'Details' });
};
//tickets
controller.tickets = (req, res) => {
    res.render('./tickets/index', { root: __dirname, title: 'Tickets' });
};
controller.ticket_details = (req, res) => {
    res.render('./tickets/details', { root: __dirname, title: 'Details' });
};
module.exports = controller;

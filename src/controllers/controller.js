const controller = {};

controller.index = (req, res) => {
    res.render('./home/index', { root: __dirname, title: 'Home' });
};
controller.about = (req, res) => {
    res.render('./about/index', { root: __dirname, title: 'About'  });
};
controller.rent_venue = (req, res) => {
    res.render('./rent_venues/index', { root: __dirname, title: 'Rent Venue'  });
};
//events
controller.show_events = (req, res) => {
    res.render('./show_events/index', { root: __dirname, title: 'Events'  });
};
controller.event_details = (req, res) => {
    res.render('./event_details/index', { root: __dirname, title: 'Details'  });
};
//tickets
controller.tickets = (req, res) => {
    res.render('./tickets/index', { root: __dirname, title: 'Tickets'  });
};
controller.ticket_details = (req, res) => {
    res.render('./tickets/details', { root: __dirname, title: 'Details'  });
};
module.exports = controller;
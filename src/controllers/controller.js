const controller = {};

controller.index = (req, res) => {
    res.render('./home/index', { root: __dirname });
}
controller.about = (req, res) => {
    res.render('./about/index', { root: __dirname });
}
controller.rent_venue = (req, res) => {
    res.render('./rent_venues/index', { root: __dirname });
}
controller.show_events = (req, res) => {
    res.render('./show_events/index', { root: __dirname });
}
controller.event_details = (req, res) => {
    res.render('./event_details/index', { root: __dirname });
}
controller.tickets = (req, res) => {
    res.render('./tickets/index', { root: __dirname });
}
controller.ticket_details = (req, res) => {
    res.render('./tickets/details', { root: __dirname });
}

module.exports = controller
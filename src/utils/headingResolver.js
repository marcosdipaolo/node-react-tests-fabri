export default (headingKey, message = "") => {
    const map = {
        "rent-venue": {
            heading: "Are You Looking For A Venue?",
            subHeading: "Check out our venues, pick your choice and fill the reservation application.",
            headingKey
        },
        "shows-events": {
            heading: "Our Shows & Events",
            subHeading: "Check out upcoming and past shows & events.",
            headingKey
        },
        "tickets": {
            heading: "Tickets On Sale Now!",
            subHeading: "Check out upcoming and past shows & events and grab your ticket right now.",
            headingKey
        },
        "about": {
            heading: "Radio City Musical Hall",
            subHeading: "September 24-28, 2021 in Rio de Janeiro",
            headingKey
        },
        "error": {
            heading: "There was an error",
            subHeading: message,
            headingKey
        }
    }
    return map[headingKey] || {
        heading: "",
        subHeading: "",
        headingKey
    };
}
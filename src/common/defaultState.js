const defaultState = {
    lastName: "Last Name",
    firstName: "First Name",
    birthday: "1970-01-01T00:00:00Z",
    quote: "Quote",
    urls: {
        portfolio: "http://domain.dot",
        facebook: "#",
        github: "#",
        linkedin: "#",
        picture: "/static/sami2.png",
        contact: "#contact"
    },
    items: {
        about: [
            {title: "Title", text: "Text"},
        ],

        timeline: [
            {
                title: "Title",
                text: "Text",
                date: "1970-01-01T00:00:00Z",
                location: {
                    country: "FR",
                    zip: "75001"
                },
                duration: 0,
                category: 0,
                company: {
                    url: "#",
                    name: "Name"
                }
            },
            {
                title: "Title",
                text: "Text",
                date: "1970-01-01T00:00:00Z",
                location: {
                    country: "FR",
                    zip: "13120"
                },
                duration: 0,
                category: 1,
                company: {
                    url: "#",
                    name: "Name"
                }
            }
        ],
        skills: [
            {category: 0, label: "Label", level: 80},
            {category: 1, label: "Label", level: 80}
        ]
    },
    mail: "me@domain.dot",
    location: {
        country: "FR",
        zip: "75001"
    },
    ready: false
};

export default defaultState;
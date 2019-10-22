const defaultUser = {
    lastName: "Last Name",
    firstName: "First Name",
    birthday: "1970-01-01T00:00:00Z",
    quote: "Quote",
    brief: "Lorem Ipsum",
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
                brief: "Brief",
                item: [
                    "Items", "Items", "Items"
                ],
                start: "1970-01-01T00:00:00Z",
                end: "1980-01-01T00:00:00Z",
                location: {
                    country: "FR",
                    zip: "75001"
                },
                category: 0,
                company: {
                    url: "#",
                    name: "Name"
                }
            },
            {
                title: "Title",
                brief: "Brief",
                item: [
                    "Items", "Items", "Items"
                ],
                start: "1970-01-01T00:00:00Z",
                end: "1970-02-01T00:00:00Z",
                location: {
                    country: "FR",
                    zip: "13120"
                },
                category: 1,
                company: {
                    url: "#",
                    name: "Name"
                }
            }
        ],
        skills: [
            {category: 0, label: "Label", level: 80},
            {category: 1, label: "Label", level: 80, mention: "mention"}
        ]
    },
    mail: "me@domain.dot",
    location: {
        country: "FR",
        zip: "75001"
    },
    ready: false
};

export default defaultUser;
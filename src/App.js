import "./scss/App.scss";
import React, {Component} from "react";
import Loader from "./Loader";
import Page from "./Page";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: "Last Name",
            firstName: "First Name",
            birthday: "1970-01-01T00:00:00Z",
            quote: "Quote",
            urls: {
                facebook: "#",
                github: "#",
                linkedin: "#",
                picture: "",
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
                        category: {
                            tag: "Tag",
                            color: "black"
                        },
                        company: {
                            url: "#",
                            name: "Name"
                        }
                    }
                ],
                skills: [
                    {category: "category", label: "Label", level: 80}
                ]
            },
            mail: "me@domain.dot",
            location: {
                country: "FR",
                zip: "75001"
            },
            ready: false
        }
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/samiBendou/dahoux.net/master/src/user.json")
            .then(response => response.text())
            .then(str => this.setState({...JSON.parse(str), ready: true}));
    }

    render() {
        return !this.state.ready ? <Loader/> : <Page data={this.state}/>;
    }
};

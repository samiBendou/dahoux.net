import React, {Component} from "react";
import "./scss/Home.scss";
import About from "./about/About";
import Contact from "./contact/Contact"
import Skills from "./skills/Skills";
import Timeline from "./timeline/Timeline";
import {Container, Jumbotron} from "react-bootstrap";
import ReactLoading from 'react-loading';

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
                contact: null
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
        let urls = this.state.urls;
        urls.contact = urls.contact || "#contact";

        if (!this.state.ready) {
        return (
            <div className="loader-background">
                <div
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)',

                    }}>
                    <ReactLoading type="bubbles" color="#000000"/>
                </div>
            </div>);
        } else {
            return (
                <div>
                    <About
                        lastName={this.state.lastName}
                        firstName={this.state.firstName}
                        quote={this.state.quote}
                        urls={urls}
                        items={this.state.items}
                        birthday={this.state.birthday}
                        location={this.state.location}
                    />
                    <Container>
                        <Skills items={this.state.items.skills}/>
                        <Timeline items={this.state.items.timeline}/>
                        <Jumbotron id="contact">
                            <Contact
                                mail={this.state.mail}
                            />
                        </Jumbotron>
                        <h6 className="copyright-text">© Sami Dahoux 2019, All Rights Reserved</h6>
                    </Container>
                </div>
            );
        }
    }
};

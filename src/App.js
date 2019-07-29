import React, {Component} from 'react';
import './scss/App.scss';
import About from './about/About';
import Contact from './contact/Contact'
import Skills from "./skills/Skills";
import Timeline from "./timeline/Timeline";
import {Container, Jumbotron} from "react-bootstrap";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: "Dahoux",
            firstName: "Sami",
            birthday: new Date(1995, 6, 9),
            quote: "Engineering student",
            urls: {
                facebook: "https://www.facebook.com/sl.bendahhou",
                github: "https://github.com/samiBendou",
                linkedin: "https://www.linkedin.com/in/sami-dahoux-b20386a9/",
                picture: "/static/sami2.jpg",
                contact: null
            },
            items: {
                about: [
                    {title: "Love", text: "Feel the love"},
                    {title: "Peace", text: "Feel the peace"},
                ],

                timeline: [
                    {
                        title: 'ReactJS Developer',
                        text: 'Wrote my first React app',
                        date: new Date(2019, 6, 25),
                        location: {
                            country: "FR",
                            zip: "75019"
                        },
                        duration: 0,
                        category: {
                            tag: 'medium',
                            color: '#018f69'
                        },
                        company: {
                            url: 'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                            name: 'MySelfAction'
                        }
                    }
                ],
                skills: [
                    {category: "management", label: "Communication", level: 80},
                    {category: "technical", label: "Javascript", level: 50},
                ]
            },
            mail: "sbdh75@gmail.com",
            location: {
                country: "FR",
                zip: "13120"
            }
        }
    }

    render() {
        let urls = this.state.urls;
        urls.contact = urls.contact || "#contact";
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

};

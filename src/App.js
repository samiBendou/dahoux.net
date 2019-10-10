import "./scss/App.scss";
import React, {Component} from "react";
import Loader from "./Loader";
import Page from "./Page";
import {fetchLocation, fetchTimelineLocation} from "./common/core/location";
import defaultUser from "./common/core/defaultUser";

const fetchUser = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(str => resolve(JSON.parse(str)))
            .then(json => resolve(json))
            .catch(e => reject.log(e));
    })
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {ready: false};
        this.data = defaultUser;
    }

    componentWillMount() {
        fetchUser("https://raw.githubusercontent.com/samiBendou/dahoux.net/master/src/user.json")
            .then(data => {
                Promise.all([fetchLocation(data.location), fetchTimelineLocation(data.items.timeline)])
                    .then((items) => {
                        this.data = data;
                        this.data.location = items[0];
                        this.data.items.timeline.forEach((item, index) => item.location = items[1][index]);
                        this.setState({ready: true});
                    })
            })
            .catch(e => console.log(e));
    }

    render() {
        return !this.state.ready ? <Loader/> : <Page data={this.data}/>;
    }
};

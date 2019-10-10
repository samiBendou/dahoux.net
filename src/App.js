import "./scss/App.scss";
import React, {Component} from "react";
import Loader from "./Loader";
import Page from "./Page";
import {fetchLocation, fetchTimelineLocation} from "./common/core/location";
import defaultUser from "./common/core/defaultUser";
import user from "./user.json";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {ready: false};
        this.data = defaultUser;
    }

    componentWillMount() {
        Promise.all([fetchLocation(user.location), fetchTimelineLocation(user.items.timeline)])
            .then((items) => {
                this.data = user;
                this.data.location = items[0];
                this.data.items.timeline.forEach((item, index) => item.location = items[1][index]);
                this.setState({ready: true});
            })
    }

    render() {
        return !this.state.ready ? <Loader/> : <Page data={this.data}/>;
    }
};

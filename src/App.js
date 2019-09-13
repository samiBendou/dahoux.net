import "./scss/App.scss";
import React, {Component} from "react";
import Loader from "./Loader";
import Page from "./Page";
import defaultState from "./common/defaultState";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
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

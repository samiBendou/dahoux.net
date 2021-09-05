import "./scss/App.scss";
import React, {Component} from "react";
import Loader from "./Loader";
import Page from "./Page";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {status: "loading", error: undefined, data: undefined};
    }

    componentWillMount() {
        fetch("https://portfolio.bendou.space/api/portfolio/bendou")
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                res.text().then(text => {
                    this.setState({status: "error", error: new Error(`${res.status} - ${text}`)});
                });
                return null;

            })
            .then(contents => {
                if (contents === null) {
                    return;
                }
                this.setState({status: "ready", data: contents});
            })
            .catch(err => this.setState({status: "error", error: err}));
    }

    render() {
        switch (this.state.status) {
            case "loading":
                return <Loader/>;
            case "ready":
                return <Page data={this.state.data}/>;
            case "error":
                console.log(this.state.error);
                return <div>Something went wrong!<br/>{this.state.error.toString()}</div>
            default:
                return <div>Unexpected application status! {this.state.status}</div>
        }
    }
};

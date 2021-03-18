import "./scss/App.scss";
import React, {Component} from "react";
import Loader from "./Loader";
import Page from "./Page";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {status: "loading", error: undefined};
        this.data = undefined;
    }

    componentWillMount() {
        fetch("http://localhost:5000/api/v1/bendou")
            .then(res => {
                if(res.status !== 200) {
                    res.text().then(text => {
                        this.setState({status: "error", error: `${res.status}: ${text}`});
                    });
                    throw Error(res.status.toString());
                }
                return res.json();
            })
            .then(contents => {
                this.data = contents
                this.setState({status: "ready"});
            })
            .catch(err => this.setState({status: "error", error: err}));
    }

    render() {
        switch(this.state.status) {
            case "loading":
                return <Loader/>;
            case "ready":
                return <Page data={this.data}/>;
            case "error":
                console.log(this.state.error);
                return <p>Something went wrong!<br/>{this.state.error}</p>
            default:
                return <p>Unexpected application status! {this.state.status}</p>
        }
    }
};

import React, {Component} from "react";
import {ms} from "./date.js";
import {FaBirthdayCake} from "react-icons/fa";
import "./scss/Hidder.scss";

export default class BirthdayText extends Component {
    constructor(props) {
        super(props);
        this.state = {hidden: true};
    }

    componentDidMount() {
        setTimeout(() => this.setState({hidden: false}), 100);
    }

    render() {
        const birthday = new Date(this.props.birthday);
        return <h6 className="birthday">
            <FaBirthdayCake style={{verticalAlign:"top"}} />
            <span
                className={this.state.hidden ? 'birthday-hidden' : ''}> {Math.floor((new Date() - birthday) / ms.year)} years
            </span>
        </h6>
    }
}
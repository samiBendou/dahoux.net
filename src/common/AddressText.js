import React, {Component} from "react";
import {FaMapMarker} from "react-icons/fa";
import "./scss/Hidder.scss";
import {fetchAddress} from "./address";

export default class AddressText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            country: "",
            county: "",
            hidden: true
        }
    }

    componentWillMount() {
        this.fetchLocation();
    }

    fetchLocation = () => {
        fetchAddress(this.props.location).then(
            location => this.setState({...location, hidden: false})
        );
    };

    render() {
        const state = this.state;
        const text = `${state.city}, ${state.county === state.city || !this.props.county ? '' : state.county + ", "} ${state.country}`;
        return <h6 className="address">
            <a
                href={`https://www.google.com/maps/place/${this.props.location.zip}+${this.state.city}/`}>
                <FaMapMarker style={{verticalAlign:"top"}} />
            </a>
            <span className={this.state.hidden ? 'address-hidden' : ''}> {text}</span>
        </h6>;
    }
}
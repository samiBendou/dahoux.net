import React, {Component} from "react";

export default class AddressText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            zip: "",
            country: "",
            county: ""
        }
    }

    componentDidMount() {
        this.fetchLocation();
    }

    fetchLocation = () => {
        const countryUrl = `https://restcountries.eu/rest/v2/alpha/${this.props.location.country}`;
        const cityUrl = `https://geo.api.gouv.fr/communes?codePostal=${this.props.location.zip}&format=json`;
        let cityName = "", countyCode = "";

        fetch(countryUrl)
            .then(response => response.json())
            .then((data) => this.setState({country: data["name"]}))
            .catch((e) => console.log("error", e));

        fetch(cityUrl)
            .then(response => response.json())
            .then(data => {
                countyCode = data[0]["codeDepartement"];
                cityName = data[0]["nom"];
                fetch(`https://geo.api.gouv.fr/departements?code=${countyCode}&fields=nom&format=json`)
                    .then(response => response.json())
                    .then((data) => {
                        this.setState({city: cityName, county: data[0]["nom"]});
                    })
                    .catch((e) => console.log("error", e));
            })
            .catch((e) => console.log("error", e));
    };

    render() {
        const state = this.state;
        return <p>{state.city}, {state.county === state.city ? '' : `${state.county},`} {state.country}</p>;
    }
}
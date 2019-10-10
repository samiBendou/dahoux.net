const fetchLocation = (location) => {
    const countryUrl = `https://restcountries.eu/rest/v2/alpha/${location.country}`;
    const cityUrl = `https://geo.api.gouv.fr/communes?codePostal=${location.zip}&format=json`;
    let cityName = "", countryName = "", countyName = "", countyCode = "";

    return new Promise((resolve, reject) => {
        fetch(countryUrl)
            .then(response => response.json())
            .then(data => countryName = data["name"])
            .catch((e) => console.log("error", e));

        fetch(cityUrl)
            .then(response => response.json())
            .then(data => {
                countyCode = data[0]["codeDepartement"];
                cityName = data[0]["nom"];
                fetch(`https://geo.api.gouv.fr/departements?code=${countyCode}&fields=nom&format=json`)
                    .then(response => response.json())
                    .then((data) => {
                        countyName = data[0]["nom"];
                        resolve({zip: location.zip, city: cityName, country: countryName, county: countyName});
                    })
                    .catch((e) => console.log("error", e));
            })
            .catch((e) => reject(e));
    });
};

const fetchTimelineLocation = (items) => {
    return new Promise((resolve, reject) => {
        Promise.all(items.map(item => fetchLocation(item.location)))
            .then(locations => resolve(locations))
            .catch(e => reject(e));
        }
    )
};

const renderLocationText = (location, withCounty) =>
    `${location.city}, ${withCounty && location.county !== location.country ? location.county + "," : ""} ${location.country}`;

const renderLocationURL = (location) =>
    `https://www.google.com/maps/place/${location.zip}+${location.city}/`;

export {fetchLocation, fetchTimelineLocation, renderLocationText, renderLocationURL};
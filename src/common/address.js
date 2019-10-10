const fetchAddress = (loc) => {
    const countryUrl = `https://restcountries.eu/rest/v2/alpha/${loc.country}`;
    const cityUrl = `https://geo.api.gouv.fr/communes?codePostal=${loc.zip}&format=json`;
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
                        resolve({city: cityName, country: countryName, county: countyName});
                    })
                    .catch((e) => console.log("error", e));
            })
            .catch((e) => reject(e));
    });
};

export {fetchAddress};
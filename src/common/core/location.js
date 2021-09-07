const renderLocationText = (location, withCounty) =>
  `${location.city}, ${withCounty && location.city !== location.county ? location.county + ", " : ""}${
    location.country
  }`;

const renderLocationURL = (location) => `https://www.google.com/maps/place/${location.zip}+${location.city}/`;

export { renderLocationText, renderLocationURL };

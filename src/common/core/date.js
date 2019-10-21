const ms = {
    second:1000,
    minute:60000,
    hour:3.6e6,
    day:8.64e7,
    month:2.628e9,
    year:3.154e10
};

const day = {
    second:1.1574e-5,
    minute:0.000694444,
    hour:0.0416667,
    day:1,
    month:30.4167,
    year:365
};

const renderMonth = (month) => {
    const shifted = month + 1;
    return `${shifted > 9 ? '' : '0'}${shifted}`;
};

const renderDate = (start, duration) => {
    if (duration === undefined) {
        return `${start.getFullYear()}/${renderMonth(start.getMonth())}, to start`;
    }
    if (duration < 2) {
        return  start.toDateString();
    } else if (duration < 60) {
        return  `${start.getFullYear()}/${renderMonth(start.getMonth())}, ${duration} days`;
    } else if (duration < 730) {
        return  `${start.getFullYear()}/${renderMonth(start.getMonth())}, ${Math.round(duration / day.month)} months`;
    } else {
        return  `${start.getFullYear()}-${start.getFullYear() + duration / day.year}, ${duration / day.year} years`;
    }
};

const renderAge = (birthday) => Math.floor((new Date() - birthday) / ms.year);

export {ms, day, renderDate, renderAge};
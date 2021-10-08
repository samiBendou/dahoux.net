export const ms = {
  second: 1000,
  minute: 60000,
  hour: 3.6e6,
  day: 8.64e7,
  month: 2.628e9,
  year: 3.154e10,
};

export const day = {
  second: 1.1574e-5,
  minute: 0.000694444,
  hour: 0.0416667,
  day: 1,
  month: 30.4167,
  year: 365,
};

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getDate = (datetime) => (datetime ? datetime.split("T")[0] : datetime);

export const renderMonth = (month) => {
  return months[month];
};

export const renderDate = (start, end) => {
  if (end === undefined) {
    return `${start.getFullYear()} ${renderMonth(start.getMonth())}, to date`;
  }
  const duration = Math.round((end.getTime() - start.getTime()) / ms.day);
  const startYear = start.getFullYear(),
    endYear = end.getFullYear();
  const startMonth = renderMonth(start.getMonth()),
    endMonth = renderMonth(end.getMonth());
  if (duration < 2) {
    return start.toDateString();
  } else if (duration < 50) {
    return `${startMonth} ${startYear}, ${duration} days`;
  } else {
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  }
};

export const renderAge = (birthday) => Math.floor((new Date() - birthday) / ms.year);

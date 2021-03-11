const titleToLabel = (title) => title.toLowerCase()
    .replace(" ", "-")
    .replace("&", "")
    .replace(" ", "")


export default titleToLabel;
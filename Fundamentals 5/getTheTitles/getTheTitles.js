const getTheTitles = function(books) {
    titles = books.map(books => `${books.title}`)
    return titles;
}

module.exports = getTheTitles;

// Code your solution here
function findMatching(drivers, name) {
    const nameMatch = drivers.filter(function (element) {
        return element.toUpperCase() === name.toUpperCase();
    })
    return nameMatch;
}

function fuzzyMatch(drivers, letters) {
    const lettersMatch = drivers.filter(function (element) {
        return element.toUpperCase().startsWith(letters.toUpperCase());
    })
    return lettersMatch;
}

function matchName(drivers, name) {
    const nameMatch = drivers.filter(function (element) {
        return element.name === name;
    })
    return nameMatch;
}

/**
 * Check name of courses on post
 * @params: course name
 * @returns: false if no match, true if right type
 * 
 */

function checkCoursesName(name) {
    if (
        name == null ||
        name.length <= 1 ||
        typeof (name) != "string"
    ) {
        return false
    }
    return true
}

module.exports = {
    checkCoursesName
}
/**
 * Merge two objects into one
 *
 * @param  {Object} object1
 * @param  {Object} object2
 * @return {Object}
 */

module.exports = function merge(object1, object2)
{
    var result = {};

    for (var key in object1) {
        result[key] = object1[key];
    }

    for (var key in object2) {
        result[key] = object2[key];
    }

    return result;
}

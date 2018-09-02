var swear = require('./swear.json')
var regex = new RegExp(swear.join("|"), 'ig')

function clean(string) {
    if (regex.test(string)) {
        return string.replace(regex, 'BLEEEEP')
    } else {
        return string;
    }
}

module.exports = {
    clean: clean
}

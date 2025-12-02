// HANDLES TIMERS

function getCurrentTime() {
    const currentTime = new Date()

    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()

    hours = hours.toString().padStart(2, '0')
    minutes = minutes.toString().padStart(2, '0')

    return `${hours}:${minutes}`
}

// It parses time (10:30) to date ()
function timeToDate(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number)
    const d = new Date()

    d.setHours(hours, minutes, 0, 0)
    return d
}

function timerByCurrentTime(date) {
    const now = new Date()
    const target = new Date(timeToDate(date))
    const timeDiff = target - now
    
    const seconds = Math.floor((timeDiff / 1000) % 60)
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60)
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

    return {seconds, minutes, hours, days}
}

/* TESTS
console.log(timerByCurrentTime("Mon Dec 01 2025 21:35:33 GMT+0100 (Central European Standard Time)"))
console.log(timerByCurrentTime("21:37"))
console.log(timeToDate("21:37"))
*/
function test(num) {
    const regex = /[0-9][0-9]:[0-9][0-9]/
    if (regex.test(num)) {
        console.log("valid parameter ");
    } else {
        console.log("invalid parameter");
    }
}



function parseUnit(u) {
    const s = u.toLowerCase()
    if (["s", "sec", "secs", "second", "seconds"].includes(s)) return "s";
    if (["m", "min", "mins", "minute", "minutes"].includes(s)) return "m";
    if (["h", "hr", "hrs", "hour", "hours"].includes(s)) return "h";
    if (["d", "day", "days"].includes(s)) return "d";
    return null
}

function timeToMillis(num, unit) {
    switch(unit) {
        case 's':
            return num * 1000;
        case 'm':
            return num * 60000;
        case 'h':
            return num * 3600000;
        case 'd':
            return num * 86400000;
        default:
            throw new Error('Invalid parameter');
    }
}

module.exports = {
    getCurrentTime,
    parseUnit,
    timeToMillis,
    test,
    timerByCurrentTime
}
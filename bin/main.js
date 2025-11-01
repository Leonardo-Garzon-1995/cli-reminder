const sound = require("play-sound") ()
const {displayBanner} = require("../lib/reminder");

const [, , text, num, unit] = process.argv;
function timeToMillis(num, unit) {
    switch(unit.toLowerCase()) {
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

function remindme(text) {
    setTimeout(() => {
        sound.play("./sound2.mp3");
        displayBanner(text);
    }, timeToMillis(num, unit));
}

remindme(text);
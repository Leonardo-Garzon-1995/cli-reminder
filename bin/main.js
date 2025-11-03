const sound = require("play-sound") ()
const {displayBanner,} = require("../lib/format");
const {parseUnit, timeToMillis} = require("../lib/helpers")

const [, , text, num, unit] = process.argv;

function remindme(text) {
    if (process.argv.length < 5) throw new Error("Invalid parameters");

    setTimeout(() => {
        sound.play("./sound2.mp3");
        displayBanner(text);
    }, timeToMillis(num, parseUnit(unit)));
}

remindme(text);


const sound = require("play-sound") ()
const {displayBanner,} = require("../lib/format");
const {parseUnit, timeToMillis, getCurrentTime} = require("../lib/helpers")

const [, , command, text, num, unit] = process.argv;

// Set a timer
function remindme() {
    if (process.argv.length < 5) throw new Error("Invalid parameters");

    setTimeout(() => {
        sound.play("./sound2.mp3");
        displayBanner(text);
    }, timeToMillis(num, parseUnit(unit)));
}


// view Currentime
function viewTime() {
    displayBanner(getCurrentTime());
}

// executing functions
function execute() {

    if (command === "remindme") {
        remindme();
    } else {
        viewTime();
    }
    
}

execute();

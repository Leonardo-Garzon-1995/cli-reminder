// CORE LOGIC (create, update, delete)

// UI

const colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    reset: "\x1b[0m"
}
function displayBanner(text) {
    console.log(colors.cyan)
    console.log("╔" + "=".repeat(60) + "╗");
    console.log("║" + colors.reset + text.padEnd(60) + colors.cyan + "║");
    console.log("╚" + "=".repeat(60) + "╝");
    console.log(colors.reset)
}

module.exports = { displayBanner }
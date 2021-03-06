const ModBuilder = require("minecraft-scripting-toolchain");
const ts = require("gulp-typescript");

const builder = new ModBuilder("Rift");
builder.scriptTasks = [
    () => ts({
        module: "ES6",
        noImplicitAny: true,
        target: "ES6"
    })
];
module.exports = builder.configureEverythingForMe();

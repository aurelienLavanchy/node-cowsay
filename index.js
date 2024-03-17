const { sampleObject } = require("./information");
const cowsay = require("cowsay");

console.log(
    cowsay.say({
        text: `Hello, I am ${sampleObject.name}
        from the ${sampleObject.campus.toLowerCase()} campus !`,
        e: "\\/",
        T: "vv",
    })
);

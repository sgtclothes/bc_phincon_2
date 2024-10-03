const fs = require("fs");

fs.readFile("data.json", "utf8", function (err, data) {
    console.log(data);
});

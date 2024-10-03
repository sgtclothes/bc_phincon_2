const http = require("http");
const dt = require("./dateTime");
const { filterPrimeNumber, generateNumbers } = require("./filterPrimeNumber");
const port = 3000;

const server = http.createServer(function (request, response) {
    const url = request.url;
    response.writeHead(200, {
        "Content-Type": "text/html",
    });
    if (url === "/") {
        response.write("Phincon Academy");
    } else if (url === "/day") {
        response.write("Hari ini : " + dt.getDay());
    } else if (url === "/month") {
        response.write("Bulan ini : " + dt.getMonth());
    } else if (url === "/year") {
        response.write("Tahun ini : " + dt.getYear());
    } else if (url === "/showDay") {
        response.write("Hari ini adalah : " + dt.day);
    } else if (url === "/showFullDay") {
        response.write("Tanggal hari ini adalah : " + dt.getFullDate());
    } else if (url === "/getNumbers") {
        dt.numbers.forEach((number) => {
            response.write('<div style="color:red;">' + String(number) + "</div>");
        });
    } else if (url === "/getPrimeNumbers") {
        const numbers = filterPrimeNumber(generateNumbers(100));
        numbers.forEach((number) => {
            response.write(String(number) + ",");
        });
    } else {
        response.write("Tidak ada respon untuk ini");
    }
    response.end();
});

console.log(`Server start on port ${port}`);
server.listen(port);

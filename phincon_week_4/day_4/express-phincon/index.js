require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const userRoutes = require("./routes/users");
const roleRoutes = require("./routes/roles");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Bootcamp Phincon Academy");
});

// app.get("/api/:id", (req, res) => {
//     const { id } = req.params;
//     const student = students.find((student) => student.id === Number(id));
//     res.json(student);
// });

// app.get("/user", (req, res) => {
//     const { name, kelas, address } = req.query;
//     const greeting = `Selamat pagi ${name} asal ${address}, selamat datang di kelas ${kelas}`;
//     res.send(greeting);
// });

app.post("/add", (req, res) => {
    const { numberOne, numberTwo } = req.body;
    if (!isNaN(Number(numberOne)) && !isNaN(Number(numberTwo))) {
        const result = Number(numberOne) + Number(numberTwo);
        res.send({
            numberOne: Number(numberOne),
            numberTwo: Number(numberTwo),
            output: result,
        });
    } else {
        res.send("Mohon masukkan angka yang sesuai");
    }
});

app.post("/calculate", (req, res) => {
    const { numberOne, numberTwo, operator } = req.body;
    console.log(req.body);
    let result;
    if (operator === "+") {
        result = numberOne + numberTwo;
    } else if (operator === "-") {
        result = numberOne - numberTwo;
    } else if (operator === "*") {
        result = numberOne * numberTwo;
    } else if (operator === "/") {
        result = numberOne / numberTwo;
    } else {
        result = "Operator tidak ditemukan";
    }
    res.send({
        numberOne: numberOne,
        numberTwo: numberTwo,
        operator: operator,
        output: result,
    });
});

const students = [
    { id: 1, name: "Fauzan" },
    { id: 2, name: "Reza" },
    { id: 3, name: "Danty" },
];

const middleware = (req, res, next) => {
    console.log("PENGECEKAN PERTAMA");
    const { id } = req.params;
    const student = students.find((student) => student.id === Number(id));
    if (!student) {
        res.send("User belum terdaftar");
    }
    next();
};

const middleware2 = (req, res, next) => {
    console.log("PENGECEKAN KEDUA");
    next();
};

const middleware3 = (req, res, next) => {
    console.log("PENGECEKAN KETIGA");
    next();
};

app.get("/profile/:id", middleware, middleware2, middleware3, (req, res) => {
    res.send("AKSES HALAMAN PROFIL");
});

app.use("/users", userRoutes);
app.use("/roles", roleRoutes);

app.listen(port, () => {
    console.log("Server started and listen on port " + port);
});

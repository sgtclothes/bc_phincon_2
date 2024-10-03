const express = require("express");
const router = express.Router();

const students = [
    { id: 1, name: "Fauzan" },
    { id: 2, name: "Reza" },
    { id: 3, name: "Danty" },
];
router.get("/", (req, res) => {
    res.send(students);
});
router.get("/id/:id", (req, res) => {
    const { id } = req.params;
    const student = students.find((student) => student.id === Number(id));
    res.send(student);
});
router.get("/name/:name", (req, res) => {
    const { name } = req.params;
    console.log(name);
    const student = students.find((student) => {
        let lowerCase = student.name.toLowerCase();
        if (lowerCase === String(name.toLowerCase())) return student;
    });
    res.send(student);
});

module.exports = router;

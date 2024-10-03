const express = require("express");
const router = express.Router();
const roles = [
    { id: 1, name: "User" },
    { id: 2, name: "Admin" },
    { id: 3, name: "System Admin" },
];
router.get("/", (req, res) => {
    res.send(roles);
});
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const role = roles.find((role) => role.id === Number(id));
    res.send(role);
});

module.exports = router;

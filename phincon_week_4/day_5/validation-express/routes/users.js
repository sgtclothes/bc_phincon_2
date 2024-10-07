const express = require("express");
const router = express.Router();
const { middlewareUsers } = require("../middlewares/middlewareUsers");
const db = require("../database/database");

const prefixes = {
    id: "us_id",
    name: "us_name",
    password: "us_password",
    email: "us_email",
    phoneNumber: "us_phone_number",
    active: "us_active"
};

router.get("/", (req, res) => {
    db.query(`SELECT * FROM users WHERE ${prefixes['active']}=1`, (err, results) => {
        if (err) {
            console.error("Error executing query: " + err.stack);
            return res.status(500).send("Error fetching users");
        }
        return res.json(results);
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const prefixID = "us_id";
    db.query("SELECT * FROM users WHERE " + prefixID + "=" + id, (err, results) => {
        if (err) {
            console.error("Error executing query: " + err.stack);
            return res.status(500).send("Error fetching user");
        }
        return res.json(results);
    });
});

router.post("/create", (req, res) => {
    const { id, name, password, email, phoneNumber } = req.body;
    db.query(
        `INSERT INTO users (${prefixes["id"]}, ${prefixes["name"]}, ${prefixes["password"]}, ${prefixes["email"]}, ${prefixes["phoneNumber"]}, us_active) VALUES (?, ?, ?, ?, ?, ?)`,
        [id, name, password, email, phoneNumber, 1],
        (err, result) => {
            if (err) {
                console.error("Error executing query: " + err.stack);
                return res.status(400).send("Error creating user");
            }
            return res.status(201).send("User created successfully");
        }
    );
});

router.put("/update/:id", (req, res) => {
    const { name, password, email, phoneNumber } = req.body;
    const userId = req.params.id;
    db.query(
        `UPDATE users SET ${prefixes["name"]} = ?, ${prefixes["password"]} = ?, ${prefixes["email"]} = ?, ${prefixes["phoneNumber"]} = ? WHERE ${prefixes["id"]} = ?`,
        [name, password, email, phoneNumber, userId],
        (err, result) => {
            if (err) {
                console.error("Error executing query: " + err.stack);
                res.status(400).send("Error updating user");
                return;
            }
            res.send("User updated successfully");
        }
    );
});

router.delete("/delete/:id", (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    db.query(`DELETE FROM users WHERE ${prefixes["id"]} = ?`, [userId], (err, result) => {
        if (err) {
            console.error("Error executing query: " + err.stack);
            res.status(400).send("Error deleting user");
            return;
        }
        res.send("User deleted successfully");
    });
});

router.get("/data", (req, res) => {
    res.send("Successfully get user data");
});

router.post("/add", middlewareUsers, (req, res) => {
    const { name } = req.body;
    res.status(200).send(`Halo ${name}`);
});

module.exports = router;

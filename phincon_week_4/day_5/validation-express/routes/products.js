const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../jsons/computer_catalog.json");

router.get("/read-file", (req, res) => {
    fs.readFile(filepath, (error, data) => {
        if (error) {
            return res.status(500).send({
                status: "failed",
                code: 500,
                message: "Error reading file",
                error,
            });
        }
        return res.status(200).send({
            status: "success",
            code: 200,
            message: "Successfully read file json",
            data: JSON.parse(data),
        });
    });
});

router.get("/read-file-sync", (req, res) => {
    try {
        const data = fs.readFileSync(filepath);
        res.status(200).send({
            data: JSON.parse(data),
        });
    } catch (error) {
        res.status(500).send({
            error,
            message: "Failed to read file",
        });
    }
});

router.post("/write-file", (req, res) => {
    let products = JSON.parse(fs.readFileSync(filepath));
    const { brand, model, price } = req.body;
    products.push({ brand, model, price });
    products = JSON.stringify(products);
    fs.writeFile(filepath, products, (error) => {
        if (error) {
            return res.status(500).send({
                error,
                message: "Failed to read file",
            });
        }
        return res.status(200).send({
            message: "Successfully write file",
            data: JSON.parse(products)
        });
    });
});

module.exports = router;

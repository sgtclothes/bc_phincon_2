const express = require("express");
const router = express.Router();
const products = require("../json/products.json");

//Mendapatkan semua produk
router.get("/", (req, res) => {
    res.send(products);
});
//Mendapatkan produk berdasarkan ID
router.get("/id/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === Number(id));
    res.send(product);
});
//Mendapatkan produk berdasarkan nama
router.get("/name/:name", (req, res) => {
    const { name } = req.params;
    const product = products.find((product) => {
        let lowerCase = product.productName.toLowerCase();
        if (lowerCase === String(name.toLowerCase())) return product;
    });
    res.send(product);
});
//Mendapatkan produk berdasarkan Harga
router.get("/price/:price", (req, res) => {
    const { price } = req.params;
    const product = products.filter((product) => product.price === Number(price));
    res.send(product);
});

//Mendapatkan semua total Harga
router.get("/totalPrice", (req, res) => {
    let total = 0;
    products.map((product) => {
        total += Number(product.price);
    });
    res.send({
        totalPrice: total,
    });
});

module.exports = router;

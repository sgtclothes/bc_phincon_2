require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Halo Phincon");
});

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

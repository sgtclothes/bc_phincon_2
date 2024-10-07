require("dotenv").config();
require("module-alias/register");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

const authRoutes = require('@/routes/auth');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(200).send("test");
});

app.use("/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

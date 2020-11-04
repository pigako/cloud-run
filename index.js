const express = require("express");
const axios = require("axios");

const app = express();

app.use("/", (req, res) => {
    axios.post("http://34.64.252.170/pong", {
        "data": "test"
    });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`START with Port ${port}`);
});

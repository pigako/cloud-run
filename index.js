const express = require("express");
const axios = require("axios");

const app = express();

app.post("/", (req, res) => {
    axios.post("http://34.64.252.170/pong", {
        "data": "test"
    });
});

app.listen("80", () => {
    console.log("START");
});

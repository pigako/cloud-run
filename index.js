const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("/", (req, res) => {
    console.log(req.body);
    const name = req?.body?.queryResult?.intent?.name ?? "default";

    if (name.split("/")[1] === "chatbot-study-292305") {
        axios.post("http://34.64.103.223/seoul", {
            df: req.body,
            response: res
        });
    } else if (name.split("/")[1] === "skt-2020-09-02") {
        axios.post("http://34.64.252.170/pong", {
            df: req.body,
            response: res
        });
    } else {
        axios.post("http://34.64.252.170/", {
            "data": "Not Matched"
        });
    }

    res.json({});
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`START with Port ${port}`);
});

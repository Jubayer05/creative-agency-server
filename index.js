const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World, Jubayer")
})

const pass = "ELDbv0y7dtO7a2PG";

app.listen(5000);
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/delivecrous");

const Plat = mongoose.model("Plat", {
    nom : String,
    description : String,
    prix : Number,
    allergene : String
})

app.get("*", (req, res) => {
    res.status(404).end()
    console.log("error 404")
})

app.listen(8000);
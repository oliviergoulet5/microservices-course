const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
    const event = req.body;

    // warning: no error handling for these routes
    axios.post("http://localhost:4000/events", event).catch(e => console.error(e));
    axios.post("http://localhost:4001/events", event).catch(e => console.error(e));
    axios.post("http://localhost:4002/events", event).catch(e => console.error(e));
    axios.post("http://localhost:4003/events", event).catch(e => console.error(e));

    res.send({ status: "OK" });
});

app.listen(4005, () => {
    console.log("Listening on port 4005");
})
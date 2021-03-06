const express = require("express");
const bodyParser = require('body-parser');
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
    const { type, data } = req.body;

    if (type === "CommentCreated") {
        // not allowed to say orange
        const status = data.content.includes("orange") ? "rejected" : "approved";

        await axios.post("http://localhost:4005/events", { 
            type: "ContentModerated", 
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })

        res.send({});
    }
})

app.listen(4003, () => {
    console.log("Listening on port 4003");
})
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {

    res.json([
        {
            name: "Ali",
            age: 25
        },
        {
            name: "Ahmed",
            age: 30
        }
    ]);

});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
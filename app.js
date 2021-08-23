require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json())

app.get("/", (req,res) => {
    res.status("api connected")
})

app.listen(port, () => {
    console.log(`server is listening to:${port}`)
})
import express from "express";

const app = express();

app.get("/firstwordisaidonline", (_, res) => res.json("lo"));

const callback = () => console.log('Planning App is running on port 5001')
app.listen(5001, callback)

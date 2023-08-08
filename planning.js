import express from "express";

const router = express.Router();

router.post('/planner', (req, res) => {

    // res.body: {start: dt, end: dt, travelers: int, interests: varchar, activity: str, budget: str }
    // iterate and validate. catch => return error
    // build out query string (per OpenAI API documentation)
    // POST to OpenAI API (Axios?)
    // Format response + send
})

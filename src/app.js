const express = require("express");
const morganMiddleware = require("./middlewares/morgan.middleware");

const logger = require("./utils/logger");

const app = express();
let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();


// current seconds
let seconds = date_ob.getSeconds();

// Add the morgan middleware
app.use(morganMiddleware);

app.get("/api/status", (req, res) => {
    logger.info(`'message':'Demo API','Success':true:TimeStamp:${year}-${month}-${date}:${hours}:${minutes}:${seconds}`);
    res.status(200).send({
        status: "UP",
        message: "The API is up and running!"
    });
});

// Startup
app.listen(3000, () => {
    logger.info('Server is running on port 3000');
});
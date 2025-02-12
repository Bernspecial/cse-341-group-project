const express = require("express");
const route = require("./routes/index");
const mongodb = require("./database/connect")
const app = express();

app.use("/", route);


const port = process.env.PORT || 2030;

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`App connected to database and listening on ${port}`);
        });
    }
});

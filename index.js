const express = require('express');
const figlet = require("figlet");
const gradient = require("gradient-string");
const morgan = require('morgan');
const db = require('./models');
const cors = require('cors')
const app = express()

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({
    limit: "30mb",
    extended: true
}))

// config for only development
if (process.env.NODE_ENV === "development") {
    // cors it's allow to deal with react for localhost at port {PORT} without any problem
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))

    // morgan give information about each request
    app.use(morgan('dev'))
}

app.get('/', (req, res) => {
    res.json({ msg: "ok" })
}
)

const usersController = require("./users/users.controller");
app.use('/users', usersController)

const PORT = process.env.SERVE_PORT || 5000

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        runningServe(`SERVE ON PORT ${PORT}`);
    });
})

const runningServe = async (log) => {
    console.log(`\n--- ${log} ---`);

    const msg = `Akkarapon`
    figlet(msg, (err, data) => [
        console.log(gradient.pastel.multiline(data))
    ])
};
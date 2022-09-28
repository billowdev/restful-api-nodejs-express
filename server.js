require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json({
    limit: "30mb",
    extended: true
}))

const PORT = process.env.SERVE_PORT || 5000

app.listen(PORT, 'localhost', () => {
    console.log(`SERVE ON PORT ${PORT}`);
});

app.get('/api', (req, res) => {
    const data =
        res.json({
            status: res.statusCode,
            msg: "ok",

        })
})

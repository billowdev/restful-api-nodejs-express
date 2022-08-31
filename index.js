const express = require('express');
const figlet = require("figlet");
const gradient = require("gradient-string");
const app = express()

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({
    limit: "30mb",
    extended: true
}))


app.get('/api', (req, res) => {
    res.json({ msg: "ok" })
}
)

app.post('/:name', (req, res) => {
    let n = req.params.name;
    res.json({ data: n })
})

app.get('/', (req, res) => {
    let id = req.query.id;
    let n = req.query.name;
    let age = req.query.age;
    res.json({
        status: res.statusCode,
        data: {
            id, name:n, age
        }
    })
})

app.post('/', (req,res)=>{
    let body = req.body;
    res.json({
        status:res.statusCode,
        data:body
    })
})

// PORT
const PORT = process.env.SERVE_PORT || 5000

// SERVER restful api at PORT
const runningServe = async (log) => {
    console.log(`\n--- ${log} ---`);

    const msg = `AKKARAPON SERVE`
    figlet(msg, (err, data) => [
        console.log(gradient.pastel.multiline(data))
    ])
};


app.listen(PORT, () => {
    runningServe(`SERVE ON PORT ${PORT}`);
});


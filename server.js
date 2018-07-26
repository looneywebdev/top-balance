const express = require('express');
const app = express();
let topBalance = 60;

app.use(express.static('public'));

app.get ('/top-balance', (req,res) => {
    console.log("getting top balance");
    res.json({Balance: topBalance});
})

app.put ('/top-balance/:queryTarget', (req,res) => {
    console.log("adding TOP");
    res.json({Balance: topBalance + parseInt(req.params.queryTarget)});
})

app.listen(process.env.PORT || 8080, () => console.log(
    `Your app is listening on port ${process.env.PORT || 8080}`));
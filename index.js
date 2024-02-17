// console.log("Hello");

const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Express')
})
app.get('/store', (req, res) => {
    res.send('store')
})
app.get('/owais', (req, res) => {
    res.send('Owais')
})
app.get('/haseeb', (req, res) => {
    res.send('Haseeb')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

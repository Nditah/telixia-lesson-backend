const express = require('express');
const bodyParser = require('body-parser');

// Variables
const app = express();
const PORT = 4000;

// Middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes and handlers (COntrollers)
app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})

app.get('/quotes', (req, res) => {
    res.send('Retrieve All Quotes');
})

app.get('/quotes/:Id', (req, res) => {
    const id = req.params.Id;
    res.send('Retrieve One Quote Given by Id:' + id);
})

app.post('/quotes', (req, res) => {
    console.log("Request Body", req.body);
    const name = req.body.name || "Nobody";
    const quote = req.body.quote || "Shit!";
    res.send('New Quote: ' + name + " said " + quote );
})

app.put('/quotes/:Id', (req, res) => {
    id = req.params.Id;
    res.send('Update One Quote Given by Id:' + id);
})

app.delete('/quotes/:Id', (req, res) => {
    id = req.params.Id;
    res.send('Delete One Quote Given by Id:' + id);
})

// Listener
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

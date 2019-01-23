const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');

const mongoClient = mongo.MongoClient

const app = express()

var db

// Remember to change YOUR_USERNAME and YOUR_PASSWORD to your username and password! 

const dbUri = "mongodb://telixia:Telixia1@ds163694.mlab.com:63694/telixia_lesson";
mongoClient.connect(dbUri, (err, database) => {
  if (err) return console.log(err.message)
  db = database;
  app.listen(process.env.PORT || 4000, () => {
    console.log('listening on 4000')
  })
})

// Middlewares
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))


// Routes and Handlers
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err.message)
    res.render('index.ejs', { quotes: result })
  })
})

// Routes and Handlers
app.get('/quotes', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err.message)
    res.send({ quotes: result })
  })
})


app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Stella'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({ name: req.body.name }, (err, result) => {
    if (err) return res.send(500, err)
    res.send('A darth vadar quote got deleted')
  })
})

app.delete('/quotes/:Id', (req, res) => {
  id = req.params.Id;
  db.collection('quotes').deleteOne({ name: "Yahnic"}, (err, result) => {
    if (err) return res.send(500, err.message)
    res.send(result);
  })
})



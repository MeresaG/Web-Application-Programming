const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const content = require('./response');

const PORT = process.env.PORT || 8000;

//set static folder
app.use(express.static(path.join(__dirname, 'html')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/', (req, res, next) => {

    ///multiply/1/2
    res.redirect(`/${req.body.operation}/${req.body.numOne}/${req.body.numTwo}`);

});

app.get('/add/:num1/:num2', function (req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = (num1 + num2).toString();
    const results = content(sum);
    res.send(results);
  })
  
  app.get('/subtract/:num1/:num2', function (req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const difference = (num1 - num2).toString();
    const results = content(difference);
    res.send(results);
  })
  
  app.get('/multiply/:num1/:num2', function (req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const product = (num1 * num2).toString();
    const results = content(product);
    res.send(results);
  })
  
  app.get('/divide/:num1/:num2', function (req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const quotient = (num1 / num2).toString();
    const results = content(quotient);
    res.send(results);
  })

app.listen(PORT, () => console.log(`HTTP Server Started at ${PORT}`));
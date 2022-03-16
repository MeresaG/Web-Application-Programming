/*

* @author Meresa G
* @since 2022-03-12

*/

const express = require('express');
const app = express();
const path = require('path');
const logger = require('./Middleware/logger');

const port = process.env.PORT || 8000;

//Body Parser JSON
app.use(express.json());
app.use(express.urlencoded( {extended : false} ))

//init Middleware
app.use(logger);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API Routes
app.use('/api/members', require('./routes/api/routers'));

app.use((req, res, next) => {
    console.log('This is always run');
    next();
    });
app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
});
app.use('/hello-express', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(port, () => {
    console.log(`Web Server started on ${port}`);
});
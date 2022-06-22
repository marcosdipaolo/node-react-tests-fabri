const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));


//Routes
app.get('/', (req, res) => {
    res.render('./home/index', { root: __dirname });
});
app.get('/about', (req, res) => {
    res.render('./about/index', { root: __dirname });
});
app.get('/rent-venue', (req, res) => {
    res.render('./about/index', { root: __dirname });
});
app.get('/shows-events', (req, res) => {
    res.render('./about/index', { root: __dirname });
});
app.get('/tickets', (req, res) => {
    res.render('./about/index', { root: __dirname });
});

//listen
app.listen(3000, () => {
    console.log('app running at port 3000');
});

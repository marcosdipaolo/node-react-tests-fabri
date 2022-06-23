//starting
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

//config
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.static('public'));

//Routes
const routes = require('./src/routes/homeRoutes');
app.use(routes);
app.use((req, res) => {
    res.status(404).render('./errors/index', { title: 'Error' });
});

//listen
app.listen(3000, () => {
    console.log('app running at port 3000');
});

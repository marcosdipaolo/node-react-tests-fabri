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
    res.status(404).render('./errors/index', { title: 'Error', desc: 'Page not found!' });
});

//listen
app.listen(3000, () => {
    console.log('app running at port 3000');
});

/* <% if ( events.length > 0 ){ events.forEach( e =>{ %>
    <div>
        <h1><%= e.title %></h1>
    </div>
    <% })}else { %>
    <h1 class="d-flex justify-content-center p-3">No events to display</h1> */
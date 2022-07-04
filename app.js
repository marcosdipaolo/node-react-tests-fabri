//starting
import express from 'express';
const app = express();
app.set('view engine', 'ejs');

//config
import morgan from 'morgan';
app.use(morgan('dev'));
app.use(express.static('public'));

//Routes
import routes from './src/routes/homeRoutes.js';
app.use(routes);
app.use((req, res) => {
    res.status(404).render('./errors/index', {
        title: 'Error',
        desc: 'Page not found!',
    });
});

//listen
app.listen(3000, () => {
    console.log('app running at port 3000');
});

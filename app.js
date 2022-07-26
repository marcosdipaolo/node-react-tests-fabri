import express from 'express';
import morgan from 'morgan';
import routes from './src/routes/homeRoutes.js';
//starting
const app = express();
app.set('view engine', 'ejs');

//config
app.use(morgan('dev'));
app.use(express.static('public'));

//Routes
app.use(routes);
app.use((req, res) => {
    res.status(404).render('./errors/index', {
        title: 'Error',
        desc: 'Page not found!',
    });
});

//listen
import './loadEnv.js'
app.listen(process.env.PORT, () => {
    console.log('app running at port 3000');
});

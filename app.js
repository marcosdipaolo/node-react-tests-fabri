import './loadEnv.js'
import express from 'express';
import morgan from 'morgan';
import routes from './src/routes/homeRoutes.js';
import cors from "cors"

const app = express();
app.set('view engine', 'ejs');

//config
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//Routes
app.use(routes);
app.use((req, res) => {
    res.status(404).render('./errors/index', {
        title: 'Error',
        desc: 'Page not found!',
    });
});
const PORT = process.env.PORT;
//listen
app.listen(PORT, () => {
    console.log(`app running at port ${PORT}`);
});

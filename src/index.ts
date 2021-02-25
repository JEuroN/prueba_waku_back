import express = require('express');
import config = require('./config');
import bodyParser = require('body-parser');
import {login} from './routes/login';
import {catPost} from './routes/catPost';
import {refillGato} from './routes/refillGato';
const cors = require('cors');

//Crear router app
const app: express.Express = express();
const router: express.Router = express.Router();

app.use(cors({
    origin: true,
    credentials: true
}));
app.options('*', cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(router);

router.use('/login', login);
router.use('/dash', catPost);
router.use('/getGatos', refillGato);

app.listen(config.port, ()=>{
    console.log(`Conectado al puerto ${config.port}`); 
})
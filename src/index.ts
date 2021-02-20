import express = require('express');
import config = require('./config');
import bodyParser = require('body-parser');
import * as login from './routes/login'
const cors = require('cors');

const app: express.Express = express();
const router: express.Router = express.Router();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.options('*', cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(router);

router.use('/', login.login);

app.listen(config.port, ()=>{
    console.log(`Conectado al puerto ${config.port}`); 
})
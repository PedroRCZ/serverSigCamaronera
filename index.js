const express = require('express');
const conexion_pg = require('./dbConfig');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

conexion_pg.connect();

app.use(require('./routes/visuzalizaVentas'));

app.listen(4000, () =>{
    console.log('Server Ac tivo')
})
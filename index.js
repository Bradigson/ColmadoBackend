const express = require('express');
const cors = require('cors');
const db = require('./db/database.conection');
const route = require('./routes/colmado.route')



const app = express();
app.set('port', process.env.PORT || 2000);
app.use(cors('*'));
app.use(express.json())

app.use('/api/v1',route);

const port = app.get('port');

app.listen(port, ()=>{
    console.log('port available at:', port);
});
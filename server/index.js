require('dotenv').config();
const
    express  = require('express'),
    { json } = require('body-parser'),
    cors     = require('cors'),
    axios    = require('axios'),
    massive  = require('massive'),
    app      = express(),
    port     = process.env.PORT || 3223,
    // Controllers
    { 
        create, 
        readShelf, 
        readBin, 
        update, 
        destroy 
    } = require('./controllers/controller_main');

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    })
    .catch(err => console.log(err));

app.use(json());
app.use(cors());

app.get('/api/shelf/:id', readShelf);
app.get('/api/bin/:id', readBin);
app.post('/api/create/:id', create);
app.put('/api/bin/:id', update);
app.delete('/api/delete/:id', destroy);

app.listen(port, () => console.log(`You're listening to port ${port} radio!`))
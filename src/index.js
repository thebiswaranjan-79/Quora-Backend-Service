const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({
        message : 'Quora Service is UP'
    })
})

app.listen(PORT, () =>{ 
    console.log(`Server Started at PORT ${PORT}`);
})

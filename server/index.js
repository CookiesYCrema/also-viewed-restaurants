const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js');
const cors = require('cors');
const helmet = require('helmet')

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(helmet());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.listen(port, () => {console.log('connected to port: ', port)});
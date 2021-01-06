const express = require('express');
const logger = require('morgan');


require('dotenv').config();
require('./config/database');

const app = express();

// mount our middleware
app.use(express.json());
app.use(logger('dev'));
// app.use(morgan('dev'));
// app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));

// mount our routes
// app.use('/api/users', require('./routes/api/users'));

const port = process.env.PORT || 3001
// tell express to listen
app.listen(port, function() {
    console.log(`Express is listening on port ${port}`);
})
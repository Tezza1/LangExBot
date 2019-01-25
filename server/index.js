// server/index.js

/*----------------------------------------
- login with Google
- send email and name to DB
- if not in DB then register user
- if in DB then get and use the User
-------------------------------------------*/

require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const gravatar = require('gravatar');
const cors = require('cors');

const app = express();

// Load routes
const users = require('./routes/users');
const dialogs = require('./routes/dialogs');

// Load user model
const User = require('./models/User.js');
const Dialog = require('./models/Dialog.js');

/*
const mongoDB = process.env.MONGO_URI;
mongoose
    .connect(mongoDB)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
*/
// Cors
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// @route       GET /
// @desc        Landing page
// @access      Public
app.get('/', (req, res) => {
    res.send("hello")
});


// Use routes
app.use('/users', users);
app.use('/dialogs', dialogs);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
})

const express = require('express');
const app = express();
const db = require('./db')
require('dotenv').config()
const passport = require('./auth');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000;

// Middleware funtion
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`);
    next(); // move on to next phase
}
app.use(logRequest);



app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session : false})

app.get('/' ,localAuthMiddleware,(req, res) => {
    res.send('Welcome to our hotel');
})

// Import router module
const personRoutes = require('./routes/personRoutes');
// Use the router
app.use('/person', localAuthMiddleware, personRoutes)



// Import router module
const menuRoutes = require('./routes/menuRoutes');
const Person = require('./models/person');
// Use the router
app.use('/menu', localAuthMiddleware ,menuRoutes)

app.listen(PORT, function(){
    console.log('Listening on port 3000...');
})

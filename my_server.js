const express = require('express');
const app = express();
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to our hotel');
})

// Import router module
const personRoutes = require('./routes/personRoutes');
// Use the router
app.use('/person', personRoutes)



// Import router module
const menuRoutes = require('./routes/menuRoutes');
// Use the router
app.use('/menu', menuRoutes)

app.listen(3000, function(){
    console.log('Listening on port 3000...');
})

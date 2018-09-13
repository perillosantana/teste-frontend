let express = require('express')
let nunjucks = require('nunjucks')
let app = express()
let data = require('./example.json');

// Static files Setup
app.use('/dist', express.static('dist'));
app.use('/src', express.static('src'));


// Templates Engine Setup
app.set('view engine', 'njk')
nunjucks.configure('views', {
    express: app
})

// Routes
app.use((req, res, next) => {
    res.render('index', data)
})

// Setup port to listen on
app.listen(3000)
console.log(`Running on: http://localhost:3000/`);

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
let port = process.env.PORT || 3000
app.listen(port, () => {
    if (process.env.PORT) {
        console.log('Umbler listening on port %s', port);
    } else {
        console.log(`Running on: http://localhost:${port}/`)
    }
});

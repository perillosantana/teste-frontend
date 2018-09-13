let express = require('express')
let nunjucks = require('nunjucks')
let app = express()

// Static files Setup
app.use('/dist', express.static('dist'));

// Templates Engine Setup
app.set('view engine', 'njk')
nunjucks.configure('views', {
    express: app
})

// Routes
app.use((req, res, next) => {
    res.render('index', {
        page_title: "Teste",
    })
})

// Setup port to listen on
app.listen(3000)
console.log(`Running on: http://localhost:3000/`);

const express = require('express')

const bodyParser = require('body-parser')

const app = express()

// parse application/json
app.use(bodyParser.json())

const index = require('./routes')
app.use('/', index)

app.listen(8000, () => console.log('Listening on port 8000!'))

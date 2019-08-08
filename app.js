const express = require('express')

const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()

app.use(cors())

// parse application/json
app.use(bodyParser.json())

const index = require('./routes')
app.use('/', index)

app.listen(8000, () => console.log('Listening on port 8000!'))

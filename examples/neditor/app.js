const express = require('express')
const ueditor_backend = require('ueditor-backend')
const app = express()

ueditor_backend(app)
app.use(express.static('utf8-php'))
app.listen(80)
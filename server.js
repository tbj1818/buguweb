/**
 * Created by LangK on 2016/12/20.
 */

var express = require('express')
var bodyParser = require('body-parser')
var paths = require('path')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
global.dirname = paths.join(__dirname, './')

app.use(express.static(paths.join(global.dirname, './dist/')))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})


app.listen(80, function () {
  console.log('server start')
})

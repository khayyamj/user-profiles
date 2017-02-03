var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
var PORT = 3000
var corsOptions = {
   origin: 'http://localhost:' + PORT
}
var config = require('./config')
var userCtrl = require('./controllers/userController')
var profileCtrl = require('./controllers/profileController')



app.use(bodyParser.json)
app.use(session({
   secret: config.sessionSecret,
   resave: true,
   saveUninitialized: true
}))
app.use(express.static(__dirname + '/public'))

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.friendsProfiles)


app.listen(PORT, function(){
   console.log('Now listening on port ' + PORT)
})

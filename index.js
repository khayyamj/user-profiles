var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var session = require('express-session')
var config = require('./config')
var profileCtrl = require('./controllers/profileCtrl')
var userCtrl = require('./controllers/userCtrl')

var app = express();
var PORT = 3000;
var corsOptions = {
   origin: 'http://localhost:' + PORT
}

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(session({
   secret: config.sessionSecret,
   resave: true,
   saveUninitialized: true
}))
app.use(express.static(__dirname + '/public'))

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.friends)







app.listen(PORT, function(){
   console.log('Server now listening on port ' + PORT)
})

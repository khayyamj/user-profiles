var express = require ('express')
var session = require ('express-session')
var cors = require ('cors')
var bodyParser = require ('body-parser')
var PORT = 3000
var corsOptions = {
   origin: 'http://localhost:' + PORT
}

var app = express();
var config = require('./config')
var profileCtrl = require ('./controllers/profileControl')
var userCtrl = require ('./controllers/userControl')

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(session({
   secret: config.sessionSecret,
   resave: true,
   saveUninitialized: true
}))
app.use(express.static(__dirname + '/public'))

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriends)




app.listen(PORT, function() {
   console.log('Server running: listening on port ' + PORT)
})

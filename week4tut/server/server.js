var cors = require('cors');


const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const loginApi = require('./routes/api-login')
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api', loginApi)

app.get('/', function(req, res){
  res.send('hello from server')
})

app.listen(PORT, function(){
  console.log('server running on localhost:' + PORT)
})





//const path = require('path');
//const http = require('http').Server(app);
/* app.use(express.static(path.join(__dirname, '../dist/week4tut/')));

require('./routes/api-login.js')(app, path);

http.createServer(function (req, res) {
  console.log("Server Running...")
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(3000); */





/* var fs = require('fs');

app.get('/api/auth', function(req,res) {
    fs.readFile('users.js', function(err, data){
        res.write(data);
        return res.end();
    });
    (__dirname + 'src/index.html');
})


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    console.log("1 @@@@@@@@@")
  fs.readFile('user.js', function(err, data) {
    console.log("2 @@@@@@@@@")
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log("3 @@@@@@@@@")
    return res.end();
  });
}).listen(4200); */


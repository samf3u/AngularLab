const express = require('express')
const router = express.Router()

class User {
    constructor(username, birthdate, age, email, password, valid) {
      this.username = username;
      this.birthdate = birthdate;
      this.age = age;
      this.email = email;
      this.password = password;
      this.valid = valid;
    }
}

let user1 = new User("sam", "1 Sept", 23, "sam@gmail.com", "123", true)
let user2 = new User("james", "1 Oct", 23, "james@gmail.com", "123", true)
let user3 = new User("trent", "10 Sept", 23, "trent@gmail.com", "123", true)
Users = [user1, user2, user3];

router.post('/', (req, res) => {
    //new Object().toString
    
    var requestBody = req.body //JSON.parse(req.body)

    var i= 0;
    var success = false;
    var sendBackUser =  new User("","",0,"","",false)
    
    for (i=0; i < Users.length; i++) {
        if (Users[i].username == requestBody.username) {
            if (Users[i].password == requestBody.password) {
                success = true;
                sendBackUser = Users[i]
            }
        }
    }
    
    res.send(JSON.stringify(sendBackUser))
})

module.exports = router



/* 



var i= 0;
var success = false;
var sendBackInfo =  new User("","",0,"","",false)
   

body = {
    username: "sam",
    password: "123"
}

for (i=0; i < this.Users.length; i++) {
    if (this.Users[i].username == body.username) {
        if (this.Users[i].password == body.password) {
            success = true;
            sendBackInfo = this.Users[i]
        }
    }
}

console.log(sendBackInfo) */
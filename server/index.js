const express = require("express");
const cors = require('cors');
const fs = require('file-system');
const jwt = require("jsonwebtoken");
const articles = require('./articles');
const users = require('./users.json');
const bodyparse = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyparse.json())
app.use(bodyparse.urlencoded({ extended: true }));
app.use(cors());

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use('/login', (req, res) => {
  credentials = req.body
  var fuser = users.filter((user) => (user.username == credentials.username) && (user.password == credentials.password))
  if (fuser[0]) {

    res.send({
      message: "success",
      username: fuser[0].username,
      token: fuser[0].token
    });
  }
  else {
    res.send({ message: "fail" })
  }
});

app.post('/signup', (req, res) => {
  credentials = req.body
  if (credentials.username && credentials.password) {
    var fuser = users.filter((user) => user.username == credentials.username)
    if (fuser[0]) {
      if (fuser[0].password == credentials.password) {
        res.send({
          message: "success",
          username: fuser[0].username,
          token: fuser[0].token
        });
      }
      else {
        res.send({ message: "user name already exists" })
      }
    }

    else {
      const payload = {
        username: credentials.username
      }
      jwt.sign(
        payload,
        "anystring",
        { expiresIn: 30000 },
        (err, token) => {
          if (err) {
            res.send(err)
          }
          var newUser = {
            "username": credentials.username,
            "password": credentials.password,
            "token": token
          }
          users.push(newUser)
          fs.writeFile('server/users.json', JSON.stringify(users), err => {
            if (err) {
              res.send(err.message)
            }
            res.send({
              message: "success",
              username: newUser.username,
              token: newUser.token
            });
          })
        }
      );

    }
  }

  else {
    res.send({ message: "fail" })
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


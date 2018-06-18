const express    = require("express");
const app        = express();
const bodyParser = require("body-parser");
const path       = require("path");
const cors       = require("cors");
const passport   = require("passport");
// const config =require("./config/database");

const port = process.env.PORT || 8080;
app(use(cors));

/* bodyParser will parse request to json for POST */
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect(config.database);
// mongoose.connection.on('error', (err) => {
//   consolo.log(`database error: ${config.databse}`);
// })

require('./config/passport')(passport);

// Uses routes from Users
const users = require('./routes/users');
app.use('users', users);

// Users routes from Posts
const posts = require('./routes/posts');
app.use('posts', posts); 


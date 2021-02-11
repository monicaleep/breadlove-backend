require('dotenv').config();
const db = require('./models');
const express = require('express');
const app = express();
const cors = require('cors')
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const isLoggedIn = require('./middleware/isLoggedIn')
const methodOverride = require('method-override');
app.use(cors())


app.use(express.urlencoded({ extended: false })) // to use the body parser
app.use(express.static(__dirname + '/public/')) //to use the css files
app.use(methodOverride('_method')); // for put and delete





// session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// passport middleware - should come after session config
app.use(passport.initialize());
app.use(passport.session());



//CUSTOM MIDDLEWARE
app.use((req,res,next)=>{
  //before every route, add current user to res.locals;
  res.locals.currentUser = req.user;
  next();
})

//controllers middleware
app.use('/auth',require('./controllers/auth.controller'));
// app.use('/entry',require('./controllers/entry'))
// app.use('/todo',require('./controllers/todo'))
// app.use('/profile',require('./controllers/profile'))

// Index route - render the home page
app.get('/',(req,res)=>{
    res.render('home')
})

// catchall 404 page
app.get('/*',(req,res)=>{
  res.render('404')
})

// Start the app
const port = process.env.PORT || 3000
app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})

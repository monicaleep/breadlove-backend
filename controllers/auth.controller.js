const db = require('../models')
const passport = require('../config/ppConfig');



exports.signup = (req, res) => {
  db.userbaker.findOrCreate({
    where : {email: req.body.email},
    defaults: {name: req.body.name, password: req.body.password}
  })
  .then(([createdUser,created])=>{
    if(!created){  //if the user was not created cos email already exists
      // req.flash('error','A user associated with that email already exists, try logging in')
      res.send({message: 'A user associated with that email already exists'}) // redirect to login page
    } else{
      passport.authenticate('local',{
        successRedirect: '/',
      })(req,res) //IIFE
    }
  })
}



exports.login = passport.authenticate('local',{
    failureRedirect: '/auth/login',
    successRedirect: '/',

  })



exports.logout  = (req,res)=>{
  req.logout();
  // req.flash('success','You are now logged out!')
  console.log('logged out')
  res.send({message: 'you are now logged out'})
}

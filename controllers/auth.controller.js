const db = require('../models')
const config = require('../config/auth.config')
// this will give access to encode and decode the jwt itself. ( allows us to work with jwt)
const jwt = require('jsonwebtoken')
// For hashing / encrypting out passwords
const bcrypt = require('bcryptjs')

exports.signup = (req, res) => {
  db.userbaker.findOrCreate({
    where : {email: req.body.email},
    defaults: {name: req.body.name, password: req.body.password}
  })
  .then(([createdUser,created])=>{
    if(!created){  //if the user was not created cos email already exists

      return res.status(400).send({message: 'A user associated with that email already exists'}) // redirect to login page
    } else{

    }
  })
}


exports.login = passport.authenticate('local',{ })

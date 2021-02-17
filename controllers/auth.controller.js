const db = require('../models')
const config = require('../config/auth.config')
// this will give access to encode and decode the jwt itself. ( allows us to work with jwt)
const jwt = require('jsonwebtoken')
// For hashing / encrypting out passwords
const bcrypt = require('bcrypt')

exports.signup = (req, res) => {
  db.userbaker.findOrCreate({
    where : {email: req.body.email},
    defaults: {name: req.body.name, password: req.body.password}
  })
  .then(([createdUser,created])=>{
    if(!created){  //if the user was not created cos email already exists
      return res.status(400).send({message: 'A user associated with that email already exists'}) 
    } else{
      // TODO add jwt on here?
      return res.status(200).send({message: 'User created successfully'})
    }
  }).catch(err=>{
    return res.status(500).send({message: err.message})
  })
}

exports.login = async (req,res) => {
  try{
    const user = await db.userbaker.findOne({where:{email:req.body.email}})
    if( !user){
      return res.status(500).send({message: 'email not found'})
    } else {
      const match = await user.validPassword(req.body.password)
      if (!match){
        return res.status(403).send({message: 'incorrect password'})
      } else {
        token = jwt.sign({id: user.id}, config.secret, {
          expiresIn: 86400
        })
        res.status(200).send({
          accessToken: token
        })
      }
    }
  } catch(err){
    return res.status(500).send({message: err.message})
  }
}

const passport = require('passport')
const db = require('../models')
const LocalStrategy = require('passport-local')

// configure the strategy
passport.serializeUser((user,doneCallback)=>{
  console.log('serializing user...');
  doneCallback(null, user.id)
});

passport.deserializeUser((id, doneCallback)=>{
  db.userbaker.findByPk(id)
  .then(foundUser=>{
    console.log('deserializing user...');
    doneCallback(null,foundUser)
  })
  .catch(err=>{
    console.log('error deserializing user \n',err)
  })
})


// passport.use(strategy)
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    (email, password, doneCallback) => {
        // console.log("passport-local is now trying to authenticate this user:", email)
        db.userbaker.findOne({where:{email:email}})
        .then( async foundUser=>{
          let match;
          if (foundUser){
            match = await foundUser.validPassword(password)
          }
            if (!foundUser ||  !match) {
                return doneCallback(null, false)
            } else {
                return doneCallback(null, foundUser);
            }
        })
        .catch(err=>{
          console.log(err)
          return doneCallback(err)})
    }
))

module.exports = passport

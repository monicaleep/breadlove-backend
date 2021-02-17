const controller = require('../controllers/auth.controller')

module.exports = function(app) {

  // TODO , can we move this to the index.js
  app.use( (req,res, next) => {
        // set header and allow use of x access token ( we will use this to pass our token )
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        );
        next();
    })
  // POST - Sign up a user
  app.post('/auth/signup', controller.signup)
  // POST - Log in a user, return JWT
  app.post('/auth/login', controller.login)
}

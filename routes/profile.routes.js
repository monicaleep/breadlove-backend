const controller = require('../controllers/profile.controller')
const { authJwt, verifySignup } = require('../middleware')


module.exports = function(app){
  app.use( (req, res, next) => {
        // set header and allow use of x access token ( we will use this to pass our token )
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        );
        next();
    })

  // GET - Get profile information  
  app.get('/profile', [authJwt.verifyWebToken],controller.getprofile)
  // DESTROY - Delete profile
  app.delete('/profile', [authJwt.verifyWebToken],controller.deleteAccount)
}

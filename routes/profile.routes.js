const controller = require('../controllers/profile.controller')



module.exports = function(app){
  app.use( (req, res, next) => {
        // set header and allow use of x access token ( we will use this to pass our token )
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        );
        next();
    })
  app.get('/profile', [authJwt.verifyWebToken],controller.getprofile)
  app.delete('/profile', [authJwt.verifyWebToken],controller.deleteAccount)
}

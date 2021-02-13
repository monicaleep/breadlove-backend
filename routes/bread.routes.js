const controller = require('../controllers/bread.controller')
const { authJwt } = require('../middleware')

module.exports = function(app) {
  app.use( (req, res, next) => {
        // set header and allow use of x access token ( we will use this to pass our token )
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        );
        next();
    })

  app.get('/', [authJwt.verifyWebToken],controller.home)
  app.post('/bread', [authJwt.verifyWebToken],controller.createBread)
  app.get('/bread/:id' ,[authJwt.verifyWebToken],controller.getBreadDetails)
}

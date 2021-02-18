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
  // GET all breads INDEX, not a protexted route
  app.get('/',controller.home)
  // POST - CREATE a new Bread
  app.post('/bread', [authJwt.verifyWebToken],controller.createBread)
  // SHOW - View details on a specific bread
  app.get('/bread/:id' ,[authJwt.verifyWebToken],controller.showBreadDetails)
  // DESTROY - delete a bread
  app.delete('/bread/:id' ,[authJwt.verifyWebToken],controller.deleteBread)
  // EDIT - Update a bread
  app.put('/bread/:id' ,[authJwt.verifyWebToken],controller.editBread)
  // POST - Add a comment to a bread
  app.post('/bread/:id/comment',[authJwt.verifyWebToken],controller.addComment)
  //DELETE - Remove a comment from a bread
  app.delete('/bread/:id/comment/:commentid',[authJwt.verifyWebToken],controller.deleteComment)
}

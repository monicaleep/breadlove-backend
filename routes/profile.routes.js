const controller = require('../controllers/profile.controller')
const isLoggedIn = require('../middleware/isLoggedIn');


module.exports = function(app){
  app.get('/profile',isLoggedIn, controller.getprofile)
  app.delete('/profile', isLoggedIn, controller.deleteAccount)
}

const controller = require('../controllers/auth.controller')
const isLoggedIn = require('../middleware/isLoggedIn');

module.exports = function(app) {
  app.post('/auth/signup', controller.signup)
  app.post('/auth/login', controller.login)
  app.get('/auth/logout', isLoggedIn ,controller.logout)
}

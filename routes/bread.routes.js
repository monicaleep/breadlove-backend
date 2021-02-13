const controller = require('../controllers/bread.controller')
const isLoggedIn = require('../middleware/isLoggedIn');

module.exports = function(app) {
  app.get('/', controller.home)
  // app.post('/auth/login', controller.login)
  // app.get('/auth/logout', isLoggedIn ,controller.logout)
}

const controller = require('../controllers/auth.controller')

module.exports = function(app) {
  app.post('/auth/signup', controller.signup)
  app.post('/auth/login', controller.login)
}

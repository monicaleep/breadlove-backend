const controller = require('../controllers/bread.controller')
const isLoggedIn = require('../middleware/isLoggedIn');

module.exports = function(app) {
  app.get('/', controller.home)
  app.post('/bread', isLoggedIn, controller.createBread)
  app.get('/bread/:id', isLoggedIn ,controller.getBreadDetails)
}

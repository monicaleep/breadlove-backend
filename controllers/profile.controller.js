const db = require('../models')


exports.getprofile = (req,res) => {
  res.send({data:req.userId})
  // db.bread.findAll({where: {bakerId: res.locals.currentUser.id}})
}

exports.deleteAccount = (req,res) => {
  // delete all breads where id:userid
  // delete user
  // logout

}

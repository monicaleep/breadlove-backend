const db = require('../models')


exports.getprofile = async (req,res) => {
  const user = await db.userbaker.findByPk(req.userId,{include: [db.bread]})
  res.send({data:user})
  // db.bread.findAll({where: {bakerId: res.locals.currentUser.id}})
}

exports.deleteAccount = (req,res) => {
  // TODO 
  // delete user
  // logout

}

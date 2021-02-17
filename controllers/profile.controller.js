const db = require('../models')


exports.getprofile = async (req,res) => {
  const user = await db.userbaker.findByPk(req.userId,{include: [db.bread]})
  return res.send(user)
}

exports.deleteAccount = async (req,res) => {
  // TODO - check if deletes assocated 'bread' based on cascade in model
  try{
    await db.userbaker.destroy({
      where: {
        id: req.userId
      }
    })
    res.status(200).send({message: 'Successfully deleted user'})
  } catch(err){
    res.status(500).send({message: err.message})
  }

}

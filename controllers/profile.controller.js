const db = require('../models')


exports.getprofile = async (req,res) => {
  try{
    const user = await db.userbaker.findByPk(req.userId,{include: [db.bread]})
    if(user){
      return res.send(user)
    } else{
      return res.status(404).send({message: 'User not found'})
    }
  }catch(err){
    return res.status(500).send({message: err.message})
  }
}

exports.deleteAccount = async (req,res) => {
  // TODO - check if deletes assocated 'bread' based on cascade in model
  try{
    await db.userbaker.destroy({
      where: {
        id: req.userId
      }
    })
    return res.status(200).send({message: 'Successfully deleted user'})
  } catch(err){
    return res.status(500).send({message: err.message})
  }
}

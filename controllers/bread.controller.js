const db = require('../models')

exports.home = async (req,res) => {
  const breads = await db.breads.findAll({include: [db.comment]})
  // send all, send also current user if it's there
  // include allergens
  return res.send({breads})
}

exports.createBread = async (req,res) => {
  try {
    const createdBread = await db.bread.create({
      name: req.body.name,
      description: req.body.description,
      imageurl: req.body.imageurl,
      userbakerId: req.userId
    })
    if(req.body.allergens){
      // todo add allergens if they exist
      console.log(req.body.allergens)
    }
    return res.send({createdBread})
  } catch(err){
    console.log(err)
    return res.status(500).send({message: err.message})
  }
}

exports.showBreadDetails = async (req,res) =>{
  try {
    foundBread = await db.bread.findByPk(req.params.id)
    if (!foundBread){
      return res.status(404).send({message: 'Not found'})
    } else {
      return res.status(200).send(foundBread)
    }
  } catch(err){
    console.log(err)
    return res.status(500).send({message: err.message})
  }
}


exports.addComment = async (req,res) => {
  try{
    const comment = db.comment.create({
      author: req.body.author,
      body: req.body.body,
      breadId: req.params.id
    })
    return res.status(200).send({message: "Comment created successfully"})
  }catch(err){
    return res.status(500).send({message: err.message})
  }
}

// Deletes an entry from Bread table based on req.param.id
exports.deleteBread =  async (req,res) => {
  console.log('delete')
  console.log(req.userId)
  const breadtodelete = await db.bread.findByPk(req.params.id)
  if (breadtodelete.userbakerId === req.userId){
    console.log(true)
    await breadtodelete.destroy()
    return res.send({message: 'successfully deleted'})
  } else {
    return res.status(403).send({message: 'you can only delete breads that you own!'})
  }
}

exports.editBread = async (req,res) => {
  // TODO
}


exports.deleteComment = async (req,res)=>{
  await db.comment.destroy({where : {id: req.params.commentid}})
  return res.status(200).send({message: 'successfully deleted your comment'})
}

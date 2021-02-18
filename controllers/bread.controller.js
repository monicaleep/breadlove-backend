const db = require('../models')
const sequelize = require('sequelize')

exports.home = async (req,res) => {
  try{
    // get all the bread, and include the number of comments on each one!
    const breads = await db.bread.findAll({
      attributes: {
        include: [[sequelize.fn("COUNT", sequelize.col('comments.id')),'commentCount']]
      },
      include: [
        { model:db.comment, attributes: [] }
      ],
      group: ['bread.id']
    })
    // send all, send also current user if it's there
    // include allergens TODO
    return res.send({breads})

  } catch(err){
    return res.status(500).send({message: err.message})
  }
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
    return res.status(500).send({message: err.message})
  }
}


exports.addComment = async (req,res) => {
  try{
    const comment = db.comment.create({
      author: req.body.author,
      body: req.body.body,
      breadId: req.params.id,
      userbakerId: req.userId
    })
    return res.status(200).send({message: "Comment created successfully"})
  }catch(err){
    return res.status(500).send({message: err.message})
  }
}

// Deletes an entry from Bread table based on req.param.id
exports.deleteBread =  async (req,res) => {
  try{
    const breadtodelete = await db.bread.findByPk(req.params.id)
    if(!breadtodelete){
      return res.status(404).send({message: "Bread not found!"})
    }
    else if (breadtodelete.userbakerId === req.userId){
      await breadtodelete.destroy()
      return res.send({message: 'successfully deleted'})
    } else {
      return res.status(403).send({message: 'you can only delete breads that you own!'})
    }
  } catch(err){
    return res.status(500).send({message: 'Server Error'})
  }
}

exports.editBread = async (req,res) => {
  try{
    const updatedQuery = db.bread.update({
      name: req.body.name,
      description: req.body.description,
      imageurl: req.body.imageurl,
    },{
      where: {
        id: req.params.id,
        userbakerId: req.userId
      }
    })
    console.log(updatedQuery)
    return res.status(200).send(updatedQuery)
  }catch(err){
    return res.status(500).send({message: err.message})
  }
}


exports.deleteComment = async (req,res)=>{
  // find comment and check if author is user
  try{
    await db.comment.destroy({where : {id: req.params.commentid, userbakerId: req.userId}})
    return res.status(200).send({message: 'successfully deleted your comment'})
  }catch(err){
    return res.status(500).send({message: "Server Error"})
  }
}

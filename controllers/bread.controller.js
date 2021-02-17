const db = require('../models')

exports.home = async (req,res) => {
  const breads = await db.breads.findAll({include: [db.comment]})
  // send all, send also current user if it's there
  // include allergens
  res.send({data: breads})
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

      console.log(req.body.allergens)
    }
    res.send({data: createdBread})
  } catch(err){
    console.log(err)
    res.status(500).send({message: err.message})
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
    res.status(500).send({message: err.message})
  }
}


exports.addComment = async (req,res) => {
  try{
    const comment = db.comment.create({
      author: req.body.author,
      body: req.body.body,
      breadId: req.params.id
    })
    res.status(200).send({message: "Comment created successfully"})
  }catch(err){
    res.status(500).send({message: err.message})
  }
}

exports.deleteBread = async (req,res) => {
  // TODO
}

exports.editBread = async (req,res) => {
  // TODO
}

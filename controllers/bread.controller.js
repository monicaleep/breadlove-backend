const db = require('../models')

exports.home = (req,res) => {
  // db.breads.findAll
  // send all, send also current user if it's there
}

exports.createBread = async (req,res) => {
  try {
    const createdBread = await db.bread.create({
      name: req.body.name,
      description: req.body.description,
      imageurl: req.body.imageurl,
      userbakerId: res.locals.currentUser.id
    })
    res.send({data: createdBread})
  } catch(err){
    console.log(err)
    res.status(500).send({message: err.message})
  }
}

exports.getBreadDetails = (req,res) =>{
}

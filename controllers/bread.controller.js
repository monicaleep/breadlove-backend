const db = require('../models')

exports.home = async (req,res) => {
  const breads = await db.breads.findAll()
  // send all, send also current user if it's there
  res.send({data: breads})
}

exports.createBread = async (req,res) => {
  try {
    const createdBread = await db.bread.create({
      name: req.body.name,
      description: req.body.description,
      imageurl: req.body.imageurl,
      userbakerId: res.locals.currentUser.id
    })
    console.log(req.body.allergens)
    res.send({data: createdBread})
  } catch(err){
    console.log(err)
    res.status(500).send({message: err.message})
  }
}

exports.getBreadDetails = (req,res) =>{
  try {

  } catch(err){
    console.log(err)
    res.status(500).send({message: err.message})
  }
}

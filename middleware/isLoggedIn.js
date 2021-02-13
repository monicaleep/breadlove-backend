module.exports = (req,res,next) =>{
  if (!req.user){
    res.send({message: 'You must be logged in to log out silly!'})
  } else {
    next()
  }
}

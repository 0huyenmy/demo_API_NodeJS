
// mongodb user model
const User = require("../models/User");

const handleSignUp = async(req, res)=>{
  
    try{  
      const {name, email, password, dateOfBirth} = req.body;
  const ress= await User.create({
     name, email, password, dateOfBirth
  });
  res.status(201).send({
     mess: "tao thanh cong",data:ress
  })}catch(err){
     res.status(500).send({
        mess:err.message
     })
  }
  }

  module.exports = {handleSignUp}
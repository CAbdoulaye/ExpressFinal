const User = require("../model/User")
const bcrypt = require("bcrypt")
const saltForEncrypt = 10

const handleNewUser = async (req, res) => {
  const user = req.body.username
  const pwd = req.body.password

  if(!user || !pwd) {
    return res.status(400).json({message: "Missing Username and/or Password"})
  }

  //check if username is already in use
  const duplicate = await User.findOne({userName: user}).exec()
  if(duplicate) {
    return res.status(409).json({message: "Username Alreay in Use"})
  }
  try{
    //encrypt password
    const hashPwd = await bcrypt.hash(pwd, saltForEncrypt)
    // creat user
    const result = await User.create({
      userName: user,
      password: hashPwd
    })
    return res.status(201).json(result)
  }catch(err){
    return res.status(500).json(result)
  }
}

module.exports = { handleNewUser };
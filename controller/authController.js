const User = require("../model/User")
const bcrypt = require("bcrypt")


const handleLogin = async (req, res) => {
  const user = req.body.username
  const pwd = req.body.password

  if(!user || !pwd) {
    return res.status(400).json({message: "Missing Username and/or Password"})
  }

  //check if username is already in use
  const foundUser = await User.findOne({userName: user}).exec()
  if(!foundUser) {
    return res.status(401).json({message: "Incorrect Username or Password"})
  }
  try{
    //compare passwords password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if(match){
      return res.status(201).json("Logged In")
    }
    else{
      return res.status(401).json("Incorrect Username or Password")
    }
  }catch(err){
    return res.status(500).json("Server Crashed")
  }
}

module.exports = { handleLogin };
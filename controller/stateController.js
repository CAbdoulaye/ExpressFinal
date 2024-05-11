const funFact = require("../model/stateInfo")
const States = require("../model/States")

const createNewState = async (state) => {
  if(!state.stateCode || !state.funfacts){
    console.log("cannot get data!")
  }
  else{
    const duplicate = await States.findOne({stateCode: state.stateCode}).exec()
    if(duplicate){
      console.log("already in db!")
    }
    else{
      try{
        const result = await States.create({
          stateCode: state.stateCode,
          funfacts: state.funfacts
        })
        return res.status(201).json(result)
      }catch(err){
        console.log(err)
      }
    }

  }
}


const loadAllDataToDatabase = async () =>{
  funFact.map((item) =>{
    createNewState(item)
  })
}

module.exports = { loadAllDataToDatabase };
// const funFact = require("../model/stateInfo")
const States = require("../model/States")
const StatesJSON = require("../model/states.json")
const path = require('path' )



// const createNewState = async (state) => {
//   if(!state.stateCode || !state.funfacts){
//     console.log("cannot get data!")
//   }
//   else{
//     const duplicate = await States.findOne({stateCode: state.stateCode}).exec()
//     if(duplicate){
//       console.log("already in db!")
//     }
//     else{
//       try{
//         const result = await States.create({
//           stateCode: state.stateCode,
//           funfacts: state.funfacts
//         })
//         return res.status(201).json(result)
//       }catch(err){
//         console.log(err)
//       }
//     }
//   }
// }

// const loadAllDataToDatabase = async () =>{
//   funFact.map((item) =>{
//     createNewState(item)
//   })
// }


const getAllStates =  async (req, res) =>{
  const contig = req.query.contig;
  if (contig === 'true') {
    const stateJSONData =  StatesJSON
    const allData = []
    for (const item of stateJSONData) {
      if (item.code != 'AK' || item.code != 'HI' ){
        const stateDB = await States.findOne({stateCode: item.code})
        const funfacts = stateDB.funfacts
        const data = {...item, funfacts}
        allData.push(data)
      }
    }
    res.status(200).json(allData);
  } 
  else if (contig === 'false') {
    const stateJSONData =  StatesJSON
    const allData = []
    for (const item of stateJSONData) {
      if (item.code == 'AK' || item.code == 'HI' ){
        const stateDB = await States.findOne({stateCode: item.code})
        const funfacts = stateDB.funfacts
        const data = {...item, funfacts}
        allData.push(data)
      }
    }
    res.status(200).json(allData);
  }
  else {
    const stateJSONData =  StatesJSON
    const allData = []
    for (const item of stateJSONData) {
      const stateDB = await States.findOne({stateCode: item.code})
      const funfacts = stateDB.funfacts
      const data = {...item, funfacts}
      allData.push(data)
    }
    res.status(200).json(allData);
  }
}

const getState = async (req, res) => {
    if(!req.params.state) {
      return res.status(400).json({message: "Missing State Code"})
    }
    const stateDB = await States.findOne({stateCode: req.params.state})

    if (!stateDB){
      return res.status(400).redirect("/*");
    }
    const stateJSON = await StatesJSON.find((statejson)=>{
      return statejson.code === req.params.state
    })

    const funfacts = stateDB.funfacts
    const mergedData = { ...stateJSON, funfacts };

    return res.status(200).json(mergedData)
}


const getStateFunfact = async (req, res) => {
  if(!req.params.state) {
    return res.status(400).json({message: "Missing State Code"})
  }
  const stateDB = await States.findOne({stateCode: req.params.state})
  if (!stateDB){
    return res.status(400).redirect("/*");
  }

  const randomValue = Math.floor(Math.random() * (stateDB.funfacts.length - 1));
  const randomFunfact = stateDB.funfacts[randomValue]
  if (!randomFunfact)
    return res.status(200).json({message: "No Fun Fact Recorded"})
  return res.status(200).json(randomFunfact)
}

const getStateCapital = async (req, res) => {
  if(!req.params.state) {
    return res.status(400).json({message: `No State Id ${req.params.id}`})   // redirect to 404
  }
  const stateJSON = await StatesJSON.find((statejson)=>{
    return statejson.code === req.params.state
  })
  if (!stateJSON){
    return res.status(400).redirect("/*");
  }
  const capital = stateJSON.capital_city 
  if (!capital)
    return res.status(200).json({message: "No Capital City"})
  return res.status(200).json(capital)
}

const getStateNickname = async (req, res) => {
  if(!req.params.state) {
    return res.status(400).json({message: `No State Id ${req.params.id}`})   // redirect to 404
  }
  const stateJSON = await StatesJSON.find((statejson)=>{
    return statejson.code === req.params.state
  })
  if (!stateJSON){
    return res.status(400).redirect("/*");
  }
  const nickname = stateJSON.nickname 
  if (!nickname)
    return res.status(200).json({message: "No nickname"})
  return res.status(200).json(nickname)
}

const getStatePopulation = async (req, res) => {
  if(!req.params.state) {
    return res.status(400).json({message: `No State Id ${req.params.id}`})   // redirect to 404
  }
  const stateJSON = await StatesJSON.find((statejson)=>{
    return statejson.code === req.params.state
  })
  if (!stateJSON){
    return res.status(400).redirect("/*");
  }
  const population = stateJSON.population 
  if (!population)
    return res.status(200).json({message: "No population"})
  return res.status(200).json(population)
}

const getStateAdmission = async (req, res) => {
  if(!req.params.state) {
    return res.status(400).json({message: `No State Id ${req.params.id}`})   // redirect to 404
  }
  const stateJSON = await StatesJSON.find((statejson)=>{
    return statejson.code === req.params.state
  })
  if (!stateJSON){
    return res.status(400).redirect("/*");
  }
  const admission = stateJSON.admission_date 
  if (!admission)
    return res.status(200).json({message: "No admission"})
  return res.status(200).json(admission)
}


//posts
const postStateFunfact  = async (req, res) => {
  if(!req.params.state) {
    return res.status(400).json({message: `No State Id ${req.params.id}`})   // redirect to 404
  }
  if(!req.body.funfacts) {
    return res.status(400).json({message: "Missing funfacts property"})
  }
  const stateDB = await States.findOne({stateCode: req.params.state})
  if (!stateDB){
    return res.status(400).redirect("/*");
  }

  const funfacts = req.body.funfacts
  stateDB.funfacts = [...stateDB.funfacts, ...funfacts]

  const result = await stateDB.save();
  res.json(result)
}


const patchStateFunfact = async (req, res) => {
  if(!req.params.state) {
    return res.status(400).json({message: `No State Id ${req.params.state}`})   // redirect to 404
  }
  const stateDB = await States.findOne({stateCode: req.params.state})
  if (!stateDB){
    return res.status(400).redirect("/*");
  }
  if(!req.body.index || !req.body.funfact) {
    return res.status(400).json({message: `Missing Index value and/or funfact value`})   // redirect to 404
  } 
  const idIndex = req.body.index - 1 // id - 1
  if(!stateDB.funfacts[idIndex]){
    return res.status(400).json({message: `No Funfact for value ${idIndex}`})   // redirect to 404
  }



  stateDB.funfacts[idIndex] = req.body.funfact;
  const result = await stateDB.save();
  res.json(result)
}

const deleteStateFunfact = async (req, res) => {
  if(!req.params.state) {
    return res.status(400).json({message: `No State Id ${req.params.state}`})   // redirect to 404
  }
  const stateDB = await States.findOne({stateCode: req.params.state})
  if (!stateDB){
    return res.status(400).redirect("/*");
  }
  if(!req.body.index) {
    return res.status(400).json({message: `Missing Index value and/or funfact value`})   // redirect to 404
  }
  const idIndex = req.body.index - 1 // id - 1
  if(!stateDB.funfacts[idIndex]){
    return res.status(400).json({message: `No Funfact for value ${idIndex}`})   // redirect to 404
  }
  
  // delete funfact based on idIndex
  stateDB.funfacts.splice(idIndex, 1);

  const result = await stateDB.save();
  res.json(result)
}

module.exports = { getAllStates, getState, getStateCapital, getStateFunfact, getStateNickname, getStatePopulation, getStateAdmission, postStateFunfact, patchStateFunfact, deleteStateFunfact };
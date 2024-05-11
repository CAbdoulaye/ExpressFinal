const Employee = require("../model/Employee")

//Get All Employees
const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  if(!employees){
    return res.status(400).json({message: "No Employees Found!"})
  }
  res.json(employees)
}

//Create New Employee
const createNewEmployee = async (req, res) => {
  if(!req.body.firstName || !req.body.lastName) {
    return res.status(400).json({message: "Missing First and/or Last Name"})
  }
  const newEmployee = await Employee.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  try{
    const result = await Employee.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    return res.status(201).json(result)
  }catch(err){
    console.log(err)
  }
}

//Update Employee
const updateEmployee = async (req, res) => {
  if(!req.body.id) {
    return res.status(400).json({message: "Missing ID"})
  }

  const employee = await Employee.findOne({_id: req.body.id})

  if (!employee)
    return res.status(400).json({message: `Employee ${req.body.id} not found`})
  employee.firstName = req.body.firstName;
  employee.lastName = req.body.lastName;

  const result = await employee.save();
  res.json(result)
}

//Delete Employee
const deleteEmployee = async (req, res) => { 
  if(!req.body.id) {
    return res.status(400).json({message: "Missing ID"})
  }

  const employee = await Employee.findOne({_id: req.body.id})

  if (!employee)
    return res.status(400).json({message: `Employee ${req.body.id} not found`})

  const result = await Employee.deleteOne({_id: req.body.id})
  res.json(result)
}

//Get Employee
const getEmployee = async (req, res) => {
  if(!req.params.id) {
    return res.status(400).json({message: "Missing EMployee ID"})
  }

  const employee = await Employee.findOne({_id: req.params.id})

  if (!employee) // if cannot find employee
  return res.status(204).json({message: `No Employee Match Id ${req.params.id}`})
  res.json(employee)
}

module.exports = {getAllEmployees, getEmployee, createNewEmployee, deleteEmployee, updateEmployee}